import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  equipos = [
    {
      nombre: 'APPLE IMAC MK472LL',
      disponible: true,
      estado: 'Disponible',
      ubicacion: 'LIID',
      tipo: 'PC',
      imagen: 'assets/equipos/imac.jpg'
    },
    {
      nombre: 'LENOVO LEGION SLIM 7',
      disponible: true,
      estado: 'Disponible',
      ubicacion: 'XRLab',
      tipo: 'Laptop',
      imagen: 'assets/equipos/lenovo-legion.jpg'
    },
    {
      nombre: 'MACBOOK PRO 16"',
      disponible: false,
      estado: 'Ocupado',
      ubicacion: 'MediaLab',
      tipo: 'Laptop',
      imagen: 'assets/equipos/macbook.jpg'
    },
    {
      nombre: 'HP Pavilion Gaming',
      disponible: false,
      estado: 'Mantenimiento',
      ubicacion: 'LIID',
      tipo: 'PC',
      imagen: 'assets/equipos/hp-pavilion.jpg'
    },
    {
      nombre: 'ASUS ROG Zephyrus',
      disponible: true,
      estado: 'Disponible',
      ubicacion: 'XRLab',
      tipo: 'Laptop',
      imagen: 'assets\equipos\Apple IMAS.jpg'
    },
    {
      nombre: 'ACER Aspire 7',
      disponible: false,
      estado: 'Ocupado',
      ubicacion: 'MediaLab',
      tipo: 'Laptop',
      imagen: 'assets/equipos/acer-aspire.jpg'
    },
    {
      nombre: 'DELL XPS 13',
      disponible: true,
      estado: 'Disponible',
      ubicacion: 'LIID',
      tipo: 'Laptop',
      imagen: 'assets/equipos/dell-xps.jpg'
    },
    {
      nombre: 'Microsoft Surface Pro',
      disponible: true,
      estado: 'Disponible',
      ubicacion: 'XRLab',
      tipo: 'Tablet',
      imagen: 'assets/equipos/surface-pro.jpg'
    },
    {
      nombre: 'iPad Pro 12.9"',
      disponible: false,
      estado: 'Mantenimiento',
      ubicacion: 'MediaLab',
      tipo: 'Tablet',
      imagen: 'assets/equipos/ipad-pro.jpg'
    }
  ];

  equipoSeleccionado: any = null;

  ubicacion = '';
  estado = '';
  tipo = '';
  equiposFiltrados = this.equipos;

  aplicarFiltro() {
    this.equiposFiltrados = this.equipos.filter(e =>
      (this.ubicacion ? e.ubicacion === this.ubicacion : true) &&
      (this.estado ? e.estado === this.estado : true) &&
      (this.tipo ? e.tipo === this.tipo : true)
    );
  }

  limpiarFiltro() {
    this.ubicacion = this.estado = this.tipo = '';
    this.equiposFiltrados = this.equipos;
  }

  mostrarModal(equipo: any) {
    this.equipoSeleccionado = equipo;
  }

  cerrarModal() {
    this.equipoSeleccionado = null;
  }
}
