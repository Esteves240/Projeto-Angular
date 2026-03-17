import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

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

  name = '';
  password!: number;

  error = false;

  async loadUsers() {
    const response = await fetch(environment.apiUrl + '/users');
    return await response.json();
  }

  async login() {
    const users = await this.loadUsers();

    const foundUser = users.find(
      (u: { name: string; password: number }) =>
        u.name === this.name && u.password === this.password,
    );

    if (foundUser) {
      localStorage.setItem('user', JSON.stringify(foundUser));

      this.router.navigate(['/home']);
    } else {
      this.error = true;
    }
  }
}
