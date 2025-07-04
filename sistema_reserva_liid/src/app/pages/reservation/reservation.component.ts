import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necesario para [(ngModel)]

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [FormsModule], // Agrega FormsModule
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationsComponent {
  fechaInicio: string = '';
  fechaDevolucion: string = '';
  motivoUso: string = '';
  aceptaTerminos: boolean = false;

  enviarReserva() {
    if (!this.aceptaTerminos) {
      alert('Debes aceptar los términos del préstamo.');
      return;
    }

    console.log('Reserva enviada:', {
      fechaInicio: this.fechaInicio,
      fechaDevolucion: this.fechaDevolucion,
      motivo: this.motivoUso
    });

    alert('¡Reserva enviada correctamente!');
  }
}
