import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  subtitleDiretivas: string = '* Mais Diretivas';

  isAdmin: boolean = true;

  profile: number = 3;

}
