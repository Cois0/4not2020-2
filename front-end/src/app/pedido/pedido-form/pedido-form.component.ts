import { MatSnackBar } from '@angular/material/snack-bar';
import { PedidoService } from './../pedido.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {​​​​ Location }​​​​ from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { EntregadorService } from 'src/app/entregador/entregador.service';
import { LavadorService } from 'src/app/lavador/lavador.service';
import { MaquinaLavarService } from 'src/app/maquina-lavar/maquina-lavar.service';
import { PranchaPassarService } from 'src/app/prancha-passar/prancha-passar.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {


  //Variável para armazenar dados do registro
  pedido : any = {} //objeto vazio, nome no singular
  
  title : string = 'Novo pedido'

  //variaveis para armazenar as listagens de objetos relacionados
  clientes : any = [] //vetor vazio, nome no plural
  entregadores : any = []
  lavadores : any = []
  maquinasLavar : any = []
  pranchasPassar : any = []
  constructor(
    private pedidoSrv : PedidoService,
    //services das entidades relacionadas
    private clienteSrv: ClienteService,
    private entregadorSrv: EntregadorService,
    private lavadorSrv: LavadorService,
    private maquinaLavarSrv: MaquinaLavarService,
    private pranchaPassarSrv: PranchaPassarService,

    private snackBar : MatSnackBar,
    private location: Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    //Verifica se existe o parâmetro id na URL (rota)
    if(this.actRoute.snapshot.params['id']) {
      try {
      //1) Acionar o backend para buscar esse registro
      //e disponibilizá-lo para edição
      this.pedido = await this.pedidoSrv.obterUm(this.actRoute.snapshot.params['id'])
      //2) Mudar o título da página
      this.title = 'Editando pedido'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: Não foi possível carregar os dados para edição.',
        'Que Pena =/', { duration: 5000 })
      }
    }
    // carrega as listagens dos dados relacionados
    this.carregarDados()
  }

  async carregarDados() {
    try{
      this.clientes = await this.clienteSrv.listar()
      this.entregadores = await this.entregadorSrv.listar()
      this.lavadores = await this.lavadorSrv.listar()
      this.maquinasLavar = await this.maquinaLavarSrv.listar()
      this.pranchasPassar = await this.pranchaPassarSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível carregar os dados necessários para a página.', 'Que Pena =/', { duration: 5000 })
    }
  }

  async salvar(form: NgForm) {
    if(form.valid) {
        try {
        //1)Salvar os dados no back-end  
        //Se o pedido já existir(caso de edição), ele ja terá
        //o atributo _id  
        if(this.pedido._id) {
          await this.pedidoSrv.atualizar(this.pedido) //atualização
        } 
        else {
          await this.pedidoSrv.novo(this.pedido)
        } 
         //2)Dar o feedback para o usuario
        this.snackBar.open('Dados salvos com sucesso', 'Entendi',
          { duration: 5000 })
        //3)Voltar ao componente de listagem
        this.location.back()
        }
        catch(erro) {
          console.log(erro)
          this.snackBar.open('ERRO: não foi possível salvar os dados', 'Que Pena =/',
          { duration: 5000 })
        }
       
    }
  }

  voltar(form: NgForm){
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Dados não salvos. Deseja realmente voltar?')
    }

    if (result) this.location.back()
  }
}
