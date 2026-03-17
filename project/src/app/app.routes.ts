import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Crud } from './pages/crud/crud';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'crud', component: Crud },
  { path: 'register', component: Register },
];
