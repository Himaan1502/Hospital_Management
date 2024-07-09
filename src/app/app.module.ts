import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material/material.module';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import { SidebarComponent } from './component/dashboad/sidebar/sidebar.component';
import { AddDoctorComponent } from './component/dashboard/doctor/add-doctor/add-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteDoctorComponent } from './component/dashboard/doctor/delete-doctor/delete-doctor.component';
import { ViewDoctorComponent } from './component/dashboard/doctor/view-doctor/view-doctor.component';
import { AddPatientComponent } from './component/dashboard/patient/add-patient/add-patient.component';
import { DeletePatientComponent } from './component/dashboard/patient/delete-patient/delete-patient.component';
import { ViewPatientComponent } from './component/dashboard/patient/view-patient/view-patient.component';
import { LoginComponent } from './component/auth/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { provideAnimationsAsync as provideAnimationsAsync_alias } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    SidebarComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    ViewDoctorComponent,
    AddPatientComponent,
    DeletePatientComponent,
    ViewPatientComponent,
    LoginComponent,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"hospital-management-55055","appId":"1:387150890523:web:e24fe854965c449ad6dabe","storageBucket":"hospital-management-55055.appspot.com","apiKey":"AIzaSyBCf99eeC3J0t70AW5RCeqHEKkbke-IvzE","authDomain":"hospital-management-55055.firebaseapp.com","messagingSenderId":"387150890523"})),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync_alias()
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
function provideAnimationsAsync(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

function provideFirestore(arg0: () => any): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

function getFirestore(): any {
  throw new Error('Function not implemented.');
}

