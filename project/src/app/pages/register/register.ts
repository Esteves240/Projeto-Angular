import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment.development';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, Footer],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name = '';
  password!: number;

  error = false;
  success = false;

  async loadUsers() {
    const response = await fetch(environment.apiUrl + '/users');
    return await response.json();
  }

  async register() {
    this.error = false;
    this.success = false;

    const users = await this.loadUsers();

    const userExists = users.find((u: { name: string }) => u.name === this.name);

    if (userExists) {
      this.error = true;
      return;
    }

    const newUser = {
      name: this.name,
      password: this.password,
    };

    await fetch(environment.apiUrl + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    this.success = true;

    this.name = '';
    this.password = 0;
  }
}
