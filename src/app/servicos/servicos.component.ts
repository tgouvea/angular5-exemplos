import { ServicoService } from './servico.service';
import { Servico } from './servico.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  servicos: Servico [];

  constructor(private servicosService: ServicoService) { }

  ngOnInit() {
    this.servicosService.getServicos()
      .subscribe(servicos => this.servicos = servicos);
  }

  subtitleServicos: string = '* Serviço';

}
