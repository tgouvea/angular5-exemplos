import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validacao',
  templateUrl: './validacao.component.html',
  styleUrls: ['./validacao.component.css']
})
export class ValidacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  subtitleValidacao: string = '* Validação de Forumlário';

  nome: string = "";
  email: string = "";

}
