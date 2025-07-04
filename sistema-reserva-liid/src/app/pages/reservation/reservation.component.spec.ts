import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationsComponent } from './reservation.component';

describe('ReservationsComponent', () => {
  let component: ReservationsComponent;
  let fixture: ComponentFixture<ReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsComponent] // si es standalone
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show alert if terms are not accepted', () => {
    spyOn(window, 'alert');
    component.fechaInicio = '2025-07-05T10:00';
    component.fechaDevolucion = '2025-07-05T12:00';
    component.motivoUso = 'Uso académico';
    component.aceptaTerminos = false;

    component.enviarReserva();

    expect(window.alert).toHaveBeenCalledWith('Debes aceptar los términos del préstamo.');
  });

  it('should send reservation and show success alert', () => {
    spyOn(window, 'alert');
    spyOn(console, 'log');

    component.fechaInicio = '2025-07-05T10:00';
    component.fechaDevolucion = '2025-07-05T12:00';
    component.motivoUso = 'Uso académico';
    component.aceptaTerminos = true;

    component.enviarReserva();

    expect(console.log).toHaveBeenCalledWith('Reserva enviada:', {
      fechaInicio: component.fechaInicio,
      fechaDevolucion: component.fechaDevolucion,
      motivo: component.motivoUso
    });
    expect(window.alert).toHaveBeenCalledWith('¡Reserva enviada correctamente!');
  });
});
