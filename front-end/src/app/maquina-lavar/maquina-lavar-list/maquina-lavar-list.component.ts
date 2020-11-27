import { Component, OnInit } from '@angular/core';
import { MaquinaLavarService } from '../maquina-lavar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-maquina-lavar-list',
  templateUrl: './maquina-lavar-list.component.html',
  styleUrls: ['./maquina-lavar-list.component.scss']
})
export class MaquinaLavarListComponent implements OnInit {

  // Nome da entidade no plural
  maquinaLavar : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['numero', 'modelo', 'peso_max', 'editar', 'excluir']

  // Injeção de dependência ou inversão de controle
  constructor(
      private maquinaLavarSrv : MaquinaLavarService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.maquinaLavar = await this.maquinaLavarSrv.listar()
    console.log(this.maquinaLavar)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.maquinaLavarSrv.excluir(id)
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