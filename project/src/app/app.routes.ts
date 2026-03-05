import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Crud } from './pages/crud/crud';

export const routes: Routes = [
  // // default path shows the home component
  // { path: '', component: Home },
  // // catch-all redirect back to home
  // { path: '**', redirectTo: '' },
  { path: 'home', component: Home },
  { path: 'crud', component: Crud },
];
