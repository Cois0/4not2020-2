import { Component, OnInit } from '@angular/core';
import { PranchaPassarService } from '../prancha-passar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-prancha-passar-list',
  templateUrl: './prancha-passar-list.component.html',
  styleUrls: ['./prancha-passar-list.component.scss']
})
export class PranchaPassarListComponent implements OnInit {

  // Nome da entidade no plural
  pranchaPassar : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['numero', 'modelo', 'editar', 'excluir']

  // Injeção de dependência ou inversão de controle
  constructor(
      private pranchaPassarSrv : PranchaPassarService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.pranchaPassar = await this.pranchaPassarSrv.listar()
    console.log(this.pranchaPassar)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.pranchaPassarSrv.excluir(id)
        // 1) Recarregar os dados da tabela
        this.ngOnInit()
        // 2) Dar feedback para o usuário com mensagem
        this.snackBar.open('Item excluído com sucesso.', 'Entendi', {
          duration: 5000 // 5 segundos
        })
      }
      catch(erro) {
        // 3) Dar feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este item.', 'Que pena!', {
          duration: 5000 // 5 segundos
        })
        console.log(erro)
      }
    }
  }

}