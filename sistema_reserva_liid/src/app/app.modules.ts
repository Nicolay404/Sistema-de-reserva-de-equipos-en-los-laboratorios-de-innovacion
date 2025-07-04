import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Para [(ngModel)]
import { AppRoutingModule } from './app-routing.module'; // Tus rutas

import { AppComponent } from './app.component';

// 👇 Solo los componentes que sí usas ahora
import { HomeComponent } from './pages/home/home.component';
import { ReservationsComponent } from './pages/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
