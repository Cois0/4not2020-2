import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoListComponent } from './pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';

const routes: Routes = [
    //nomes de rota no Angular (path) não começam com barra
    { path: 'pedido', component: PedidoListComponent },
    { path: 'pedido/novo', component: PedidoFormComponent },
    { path: 'pedido/:id', component: PedidoFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
