import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReservationsComponent } from './pages/reservation/reservation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reservation', component: ReservationsComponent },
  { path: '**', redirectTo: '' }
];

