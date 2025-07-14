import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReservationsComponent } from './pages/reservation/reservation.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reservation', component: ReservationsComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: '**', redirectTo: '' }
];

