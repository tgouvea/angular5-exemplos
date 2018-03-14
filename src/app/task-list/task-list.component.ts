import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  subtitleNgFor = '* ngFor';

  tasks = [];
  task = "";

  add():void{
    this.tasks.push(this.task);
  }

}
