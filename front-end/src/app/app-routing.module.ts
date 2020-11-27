import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoListComponent } from './pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { EntregadorListComponent } from './entregador/entregador-list/entregador-list.component';
import { LavadorListComponent } from './lavador/lavador-list/lavador-list.component';
import { MaquinaLavarListComponent } from './maquina-lavar/maquina-lavar-list/maquina-lavar-list.component';


const routes: Routes = [
    //nomes de rota no Angular (path) não começam com barra
    { path: 'pedido', component: PedidoListComponent },
    { path: 'pedido/novo', component: PedidoFormComponent },
    { path: 'pedido/:id', component: PedidoFormComponent },

    { path: 'cliente', component: ClienteListComponent },
    { path: 'cliente/novo', component: ClienteFormComponent },
    { path: 'cliente/:id', component: ClienteFormComponent },

    { path: 'entregador', component: EntregadorListComponent },

    { path: 'lavador', component: LavadorListComponent },

    { path: 'maquina-lavar', component: MaquinaLavarListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
