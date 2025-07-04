import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Agrega si usas *ngIf, etc.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule], // Agrega CommonModule si es necesario
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistema_reserva_liid';
}
