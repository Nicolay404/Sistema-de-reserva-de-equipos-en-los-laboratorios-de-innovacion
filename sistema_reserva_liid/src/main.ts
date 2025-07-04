import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app/app-routing.module'; // Asegúrate de que las rutas estén definidas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provee las rutas
    importProvidersFrom(FormsModule) // Provee FormsModule para [(ngModel)]
  ]
}).catch(err => console.error(err));
