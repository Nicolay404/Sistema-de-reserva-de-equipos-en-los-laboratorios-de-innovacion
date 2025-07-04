import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EquipmentDetailComponent } from './pages/equipment-detail/equipment-detail.component';
import { MyLoansComponent } from './pages/my-loans/my-loans.component';

import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ReservationsComponent } from './pages/reservation/reservation.component';
import { ActiveLoansComponent } from './pages/active-loans/active-loans.component';
import { EquipmentComponent } from './pages/equipment/equipment.component';
import { UsersComponent } from './pages/users/users.component';
import { HistoryComponent } from './pages/history/history.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SurveysComponent } from './pages/surveys/surveys.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'equipment/:id', component: EquipmentDetailComponent },
  { path: 'my-loans', component: MyLoansComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'requests', pathMatch: 'full' },
      { path: 'reservation', component: ReservationsComponent },
      { path: 'active-loans', component: ActiveLoansComponent },
      { path: 'equipment', component: EquipmentComponent },
      { path: 'users', component: UsersComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'surveys', component: SurveysComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
