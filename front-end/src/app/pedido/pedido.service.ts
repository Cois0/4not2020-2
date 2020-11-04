import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiServer = environment.apiServer
  
  constructor(private http: HttpClient) { }

  listar() {
      return this.http.get(this.apiServer + 'pedido').toPromise()
  }
}
