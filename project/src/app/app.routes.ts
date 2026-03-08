import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Crud } from './pages/crud/crud';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // rota inicial
  { path: 'home', component: Home },
  { path: 'crud', component: Crud },
];
