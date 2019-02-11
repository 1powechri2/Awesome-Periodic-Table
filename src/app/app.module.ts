import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { MolecularMassComponent } from './molecular-mass/molecular-mass.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MolecularMassComponent,
    PeriodicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
