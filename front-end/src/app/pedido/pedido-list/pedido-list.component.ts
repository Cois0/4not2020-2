import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {
  
  //nome da entidade no plural  
  pedidos : any = []  

  displayedColumns : String [] = ['num_pedido', 'qtd_pecas', 'data_coleta', 'data_entrega']
  //Injeção de dependência ou inversão de controle
  constructor(private pedidoSrv : PedidoService) { }

  async ngOnInit() {
      this.pedidos = await this.pedidoSrv.listar()
      console.log(this.pedidos)
  }

}
