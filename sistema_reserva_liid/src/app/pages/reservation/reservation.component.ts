import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations',
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

