import { Routes } from '@angular/router';

export const routes: Routes = [
{
path: '',
loadComponent: () =>
import('./pages/home/home.component').then(m => m.HomeComponent)
},
{
path: 'reservation',
loadComponent: () =>
import('./pages/reservation/reservation.component').then(m => m.ReservationsComponent)
},
{
path: 'catalog',
loadComponent: () =>
import('./pages/catalog/catalog.component').then(m => m.CatalogComponent)
},
{
path: '**',
redirectTo: ''
}
];
