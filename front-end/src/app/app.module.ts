import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

/*****/
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
/*****/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { PedidoListComponent } from './pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { FormsModule } from '@angular/forms';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { EntregadorListComponent } from './entregador/entregador-list/entregador-list.component';
import { LavadorListComponent } from './lavador/lavador-list/lavador-list.component';
import { MaquinaLavarListComponent } from './maquina_lavar/maquina-lavar-list/maquina-lavar-list.component';
import { PranchaPassarListComponent } from './prancha_passar/prancha-passar-list/prancha-passar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainFooterComponent,
    MainMenuComponent,
    PedidoListComponent,
    PedidoFormComponent,
    ClienteListComponent,
    EntregadorListComponent,
    LavadorListComponent,
    MaquinaLavarListComponent,
    PranchaPassarListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatMomentDateModule
  ],
  providers: [
/**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
/**********************************************/    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
