import { Servico } from './servico.modelo';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ServicoService {

  constructor(private http: Http) { }

  getServicos(): Observable<Servico[]>{
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
        .map(response => response.json());
  }

}
