import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CongeComponent } from './conge/conge.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { EmployeeComponent } from './employee/employee.component';
import { AjouterCongeeComponent } from './congee/ajouter-congee/ajouter-congee.component';
import { AjouterEmployeeComponent } from './employee/ajouter-employee/ajouter-employee.component';
import { AjouterCvComponent } from './recrutement/ajouter-cv/ajouter-cv.component';
import { DemanderCongeComponent } from './employe/demander-conge/demander-conge.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CongeComponent,
    RecrutementComponent,
    EmployeeComponent,
    AjouterCongeeComponent,
    AjouterEmployeeComponent,
    AjouterCvComponent,
    DemanderCongeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
