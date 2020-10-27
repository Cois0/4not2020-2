import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {
  //Nome da entidade no plural  
  cursos : any = []
  
  //Quais colunas serão exibidas na tabela
  displayedColumns: string[] = ['']
  
  //Injeção de dependência ou inversão de controle  
  constructor(private cursoSrv : CursoService) { }

  async ngOnInit() {
      this.cursos = await this.cursoSrv.listar()
      console.log(this.cursos)
  }

}
