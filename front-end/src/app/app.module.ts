import { NgxMaskModule, IConfig } from 'ngx-mask'
 
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

/*****/
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
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
import { PranchaPassarListComponent } from './prancha-passar/prancha-passar-list/prancha-passar-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { EntregadorFormComponent } from './entregador/entregador-form/entregador-form.component';
import { LavadorFormComponent } from './lavador/lavador-form/lavador-form.component';
import { MaquinaLavarListComponent } from './maquina-lavar/maquina-lavar-list/maquina-lavar-list.component';
import { MaquinaLavarFormComponent } from './maquina-lavar/maquina-lavar-form/maquina-lavar-form.component';
import { PranchaPassarFormComponent } from './prancha-passar/prancha-passar-form/prancha-passar-form.component';


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
    PranchaPassarListComponent,
    ClienteFormComponent,
    EntregadorFormComponent,
    LavadorFormComponent,
    MaquinaLavarFormComponent,
    PranchaPassarFormComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatMomentDateModule,
    NgxMaskModule.forRoot()
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
