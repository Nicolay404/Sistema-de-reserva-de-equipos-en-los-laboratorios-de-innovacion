import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf, *ngFor, etc.

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule si usas directivas comunes
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class HomeComponent {}
