import { Routes } from '@angular/router';
import { ReservationsComponent } from './pages/reservation/reservation.component';

export const routes: Routes = [
  {
    path: 'reservation',
    loadComponent: () => import('./pages/reservation/reservation.component').then(m => m.ReservationsComponent)
  },
  { path: '**', redirectTo: '' }
];
