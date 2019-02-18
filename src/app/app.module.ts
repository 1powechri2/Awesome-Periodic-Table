import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { MolecularMassComponent } from './molecular-mass/molecular-mass.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { MoleQuantityComponent } from './mole-quantity/mole-quantity.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MolecularMassComponent,
    PeriodicTableComponent,
    MoleQuantityComponent,
    FooterComponent
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
