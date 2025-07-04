import { Routes } from '@angular/router';
import { ReservationsComponent } from './pages/reservation/reservation.component';
import { HomeComponent } from './pages/home/home.component'; // importa HomeComponent

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'reservation',
    loadComponent: () => import('./pages/reservation/reservation.component').then(m => m.ReservationsComponent)
  },
  { path: '**', redirectTo: '' }
];
