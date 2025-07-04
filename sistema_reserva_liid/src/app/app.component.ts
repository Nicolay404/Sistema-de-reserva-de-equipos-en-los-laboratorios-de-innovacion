import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], // Esto está bien si quieres usar routing standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ Con S y corchetes
})
export class AppComponent {
  title = 'sistema_reserva_liid';
}