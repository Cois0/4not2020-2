import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoListComponent } from './pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { EntregadorListComponent } from './entregador/entregador-list/entregador-list.component';

const routes: Routes = [
    //nomes de rota no Angular (path) não começam com barra
    { path: 'pedido', component: PedidoListComponent },
    { path: 'pedido/novo', component: PedidoFormComponent },
    { path: 'pedido/:id', component: PedidoFormComponent },

    { path: 'cliente', component: ClienteListComponent },


    { path: 'entregadores', component: EntregadorListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
