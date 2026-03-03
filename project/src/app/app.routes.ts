import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  // default path shows the home component
  { path: '', component: Home },
  // catch-all redirect back to home
  { path: '**', redirectTo: '' },
];
