import { MatSnackBar } from '@angular/material/snack-bar';
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

  displayedColumns : String [] = ['num_pedido', 'qtd_pecas', 'data_coleta', 'data_entrega', 'editar', 'excluir']
  //Injeção de dependência ou inversão de controle
  constructor(
      private pedidoSrv : PedidoService,
      private snackBar: MatSnackBar
      ) { }

  async ngOnInit() {
      this.pedidos = await this.pedidoSrv.listar()
      console.log(this.pedidos)
  }

  async excluir(id: string) {
      if(confirm('Deseja realmente excluir?')) {
        try{
            await this.pedidoSrv.excluir(id)
            //1)recarregar os dados da tabela
            this.ngOnInit()
            //2) dar feedback para o usuario com mensagem
            this.snackBar.open('Item excluído com sucesso.', 'Entendi', {​​​​
            duration: 5000 // 3 segundos
        }​​​​)
        }
        catch(erro) {
            //3) Dar feedback de erro para o usuario
            this.snackBar.open('ERRO: não foi possível excluir este item', 'Que pena =/')
            duration: 5000 // 3 segundos
            }

        }
    }
  }  
