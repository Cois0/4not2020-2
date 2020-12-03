import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoListComponent } from './pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { EntregadorListComponent } from './entregador/entregador-list/entregador-list.component';
import { EntregadorFormComponent } from './entregador/entregador-form/entregador-form.component';
import { LavadorListComponent } from './lavador/lavador-list/lavador-list.component';
import { LavadorFormComponent } from './lavador/lavador-form/lavador-form.component';
import { MaquinaLavarListComponent } from './maquina-lavar/maquina-lavar-list/maquina-lavar-list.component';
import { MaquinaLavarFormComponent } from './maquina-lavar/maquina-lavar-form/maquina-lavar-form.component';
import { PranchaPassarListComponent } from './prancha-passar/prancha-passar-list/prancha-passar-list.component';
import { PranchaPassarFormComponent } from './prancha-passar/prancha-passar-form/prancha-passar-form.component';


const routes: Routes = [
    //nomes de rota no Angular (path) não começam com barra
    { path: 'pedido', component: PedidoListComponent },
    { path: 'pedido/novo', component: PedidoFormComponent },
    { path: 'pedido/:id', component: PedidoFormComponent },

    { path: 'cliente', component: ClienteListComponent },
    { path: 'cliente/novo', component: ClienteFormComponent },
    { path: 'cliente/:id', component: ClienteFormComponent },

    { path: 'entregador', component: EntregadorListComponent },
    { path: 'entregador/novo', component: EntregadorFormComponent },
    { path: 'entregador/:id', component: EntregadorFormComponent },

    { path: 'lavador', component: LavadorListComponent },
    { path: 'lavador/novo', component: LavadorFormComponent },
    { path: 'lavador/:id', component: LavadorFormComponent },

    { path: 'maquina-lavar', component: MaquinaLavarListComponent },
    { path: 'maquina-lavar/novo', component: MaquinaLavarFormComponent },
    { path: 'maquina-lavar/:id', component: MaquinaLavarFormComponent },

    { path: 'prancha-passar', component: PranchaPassarListComponent },
    { path: 'prancha-passar/novo', component: PranchaPassarFormComponent},
    { path: 'prancha-passar/:id', component: PranchaPassarFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
