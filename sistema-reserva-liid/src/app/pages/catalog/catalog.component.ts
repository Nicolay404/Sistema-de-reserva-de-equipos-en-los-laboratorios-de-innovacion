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
    { nombre: 'APPLE IMAC MK472LL', disponible: true, estado: 'Disponible', ubicacion: 'LIID', tipo: 'PC' },
    { nombre: 'LENOVO LEGION SLIM 7', disponible: true, estado: 'Disponible', ubicacion: 'XRLab', tipo: 'Laptop' },
    { nombre: 'MACBOOK PRO 16"', disponible: false, estado: 'Ocupado', ubicacion: 'MediaLab', tipo: 'Laptop' },
    { nombre: 'HP Pavilion Gaming', disponible: false, estado: 'Mantenimiento', ubicacion: 'LIID', tipo: 'PC' },
    { nombre: 'ASUS ROG Zephyrus', disponible: true, estado: 'Disponible', ubicacion: 'XRLab', tipo: 'Laptop' },
    { nombre: 'ACER Aspire 7', disponible: false, estado: 'Ocupado', ubicacion: 'MediaLab', tipo: 'Laptop' },
    { nombre: 'DELL XPS 13', disponible: true, estado: 'Disponible', ubicacion: 'LIID', tipo: 'Laptop' },
    { nombre: 'Microsoft Surface Pro', disponible: true, estado: 'Disponible', ubicacion: 'XRLab', tipo: 'Tablet' },
    { nombre: 'iPad Pro 12.9"', disponible: false, estado: 'Mantenimiento', ubicacion: 'MediaLab', tipo: 'Tablet' }
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
