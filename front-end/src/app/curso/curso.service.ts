import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiServer = environment.apiServer

  constructor(private http: HttpClient) { }

  listar() {
      return this.http.get(this.apiServer + 'curso')
  }

}
