import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {


  //Variável para armazenar dados do registro
  pedido : any = {} //objeto vazio, nome no singular
  
  title : string = 'Novo pedido'
  constructor() { }

  ngOnInit(): void {
  }

}
