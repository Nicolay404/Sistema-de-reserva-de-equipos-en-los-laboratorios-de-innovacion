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
  fechaInicio: string = '';
  fechaDevolucion: string = '';
  motivoUso: string = '';
  aceptaTerminos: boolean = false;

  constructor(private firestore: Firestore) { }

  async enviarReserva() {
    if (!this.aceptaTerminos || !this.fechaInicio || !this.fechaDevolucion || !this.motivoUso.trim()) {
      alert('Por favor completa todos los campos y acepta los términos.');
      return;
    }

    const reserva = {
      equipoId: 'EQC-1011', // Se puede volver dinámico
      fechaInicio: this.fechaInicio,
      fechaDevolucion: this.fechaDevolucion,
      motivoUso: this.motivoUso,
      usuario: 'Nayeli', // Luego puedes obtenerlo del estado global
      fechaRegistro: new Date()
    };

    try {
      await addDoc(collection(this.firestore, 'reservas'), reserva);
      alert('¡Reserva enviada y guardada correctamente!');
      console.log('Reserva guardada:', reserva);
    } catch (error) {
      console.error('Error al guardar la reserva:', error);
      alert('Ocurrió un error al guardar la reserva. Intenta nuevamente.');
    }
  }
}
