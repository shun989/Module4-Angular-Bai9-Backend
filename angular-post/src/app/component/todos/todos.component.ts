import { Component, OnInit } from '@angular/core';
import {TodosService} from "../../service/todos.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  allTodos: any = [];
  search: any;
  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getDAta().subscribe(data=>{
      this.allTodos = data;
    })
  }

  displayedColumns: any[] = ['userId', 'id','title']
}
