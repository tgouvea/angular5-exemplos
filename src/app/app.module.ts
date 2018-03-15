import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ServicoService } from './servicos/servico.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    PipesComponent,
    DiretivasComponent,
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
