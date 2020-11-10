import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiServer : string = environment.apiServer
  private apiUri : string = this.apiServer + 'pedido'
  
  constructor(private http: HttpClient) { }

  listar() {
      return this.http.get(this.apiUri).toPromise()
  }

  excluir(id: string) {
      // o metodo delete() nativo do HTTPClient não suporta a passagem de um body para o back-end
      //return this.http.delete(this.apiServer + 'pedido/' + id)toString.Pomise()
      
      //O método request pode ser usado com qualquer verbo e aceita a passagem de body
      return this.http.request('DELETE', this.apiUri, {​​body: {​​_id: id}​​}​​).toPromise()
  }

}
