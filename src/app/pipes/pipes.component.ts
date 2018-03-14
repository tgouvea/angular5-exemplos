import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  subtitlePipes = "* Pipes";

  user: User = {
    nome: 'Tiago',
    idade: 29
  };

  upperText: string = 'texto uppercase';

  lowerText: string = 'texto LOWERCASE';

  percentValue: number = 0.8;

  data: Date = new Date();

  dinheiro: number = 889;

}
