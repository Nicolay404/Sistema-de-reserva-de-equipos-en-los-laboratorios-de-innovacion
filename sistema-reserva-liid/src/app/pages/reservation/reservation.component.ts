import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necesario para [(ngModel)]
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [FormsModule], // Agrega FormsModule
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationsComponent {
  hoy: string = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD
  fechaInicio: string = '';
  fechaDevolucion: string = '';
  motivoUso: string = '';
  aceptaTerminos: boolean = false;

  constructor(private firestore: Firestore) { }

  async enviarReserva() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const inicio = new Date(this.fechaInicio);
    const fin = new Date(this.fechaDevolucion);

    if (!this.aceptaTerminos) {
      alert('Debes aceptar los términos del préstamo.');
      return;
    }

    if (inicio < hoy) {
      alert('La fecha de inicio no puede ser anterior a hoy.');
      return;
    }

    if (fin < inicio) {
      alert('La fecha de devolución no puede ser anterior a la fecha de inicio.');
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
