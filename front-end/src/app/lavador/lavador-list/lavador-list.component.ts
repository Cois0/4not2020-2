import { Component, OnInit } from '@angular/core';
import { LavadorService } from '../lavador.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lavador-list',
  templateUrl: './lavador-list.component.html',
  styleUrls: ['./lavador-list.component.scss']
})
export class LavadorListComponent implements OnInit {

  // Nome da entidade no plural
  lavadores : any = []

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome','data_nascimento', 'cpf', 'rg', 'salario', 'endereco', 'telefone', 'email', 'editar', 'excluir']

  // Injeção de dependência ou inversão de controle
  constructor(
      private lavadorSrv : LavadorService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.lavadores = await this.lavadorSrv.listar()
    console.log(this.lavadores)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
      try {
        await this.lavadorSrv.excluir(id)
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
