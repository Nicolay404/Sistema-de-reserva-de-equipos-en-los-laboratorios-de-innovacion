import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app/app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    provideFirebaseApp(() => initializeApp({
      projectId: "equipment-reservation-backend",
      appId: "1:626026875338:web:b15c2b6a24528cee932733",
      storageBucket: "equipment-reservation-backend.firebasestorage.app",
      apiKey: "AIzaSyAaBAnY0w7dt9WVHCgR2iJwEElTHDN8FoU",
      authDomain: "equipment-reservation-backend.firebaseapp.com",
      messagingSenderId: "626026875338",
      measurementId: "G-RV25BE55GC"
    })),
    provideFirestore(() => getFirestore())
  ]
}).catch(err => console.error(err));
