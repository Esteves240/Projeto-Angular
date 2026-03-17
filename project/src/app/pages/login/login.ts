import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';
import { SupabaseService } from '../../services/supabase';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, Footer, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
  
})


export class Login {
  // Router com inject()
  private router = inject(Router);
   private supabase = inject(SupabaseService);

  name = '';
  password!: number;

  error = false;

 async login() {
  const users = await this.supabase.getUsers();

  const foundUser = users.find(
    (u) => u.name === this.name && u.password === this.password
  );

  if (foundUser) {
    localStorage.setItem('user', JSON.stringify(foundUser));
    this.router.navigate(['/home']);
  } else {
    this.error = true;
  }
}
}
