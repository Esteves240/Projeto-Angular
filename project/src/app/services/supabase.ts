import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
providedIn: 'root'
})


export class SupabaseService {
private supabase: SupabaseClient;
constructor() {
this.supabase = createClient(
environment.supabaseUrl,
environment.supabaseKey
);
}

async getUsers(): Promise<User[]> {
const { data, error } = await this.supabase
.from('users')
.select('*')
.order('created_at', { ascending: false });
if (error) {
console.error('Erro ao listar utilizadores:', error.message);
return [];
}
return data as User[];
}

async addUser(name: string, password: number): Promise<User | null> {
  const { data, error } = await this.supabase
    .from('users')
    .insert([{ name, password }])
    .select()
    .single();

  if (error) {
    console.error('Erro ao criar utilizador:', error.message);
    return null;
  }

  return data as User;
}


}