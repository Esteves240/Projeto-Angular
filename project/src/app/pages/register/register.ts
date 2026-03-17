import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../services/supabase';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private supabase = inject(SupabaseService);
  private router = inject(Router);

  name = '';
  password!: number;

  error = false;

  async register() {
    const users = await this.supabase.getUsers();

    const exists = users.find((u) => u.name === this.name);

    if (exists) {
      this.error = true;
      return;
    }

    await this.supabase.addUser(this.name, this.password);

    this.router.navigate(['/login']);
  }
}