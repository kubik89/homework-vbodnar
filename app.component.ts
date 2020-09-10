import { Component } from '@angular/core';
import {ToDoService} from './to-do.service';
import {todolist} from './todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo: todolist[] = [];
  constructor(private td: ToDoService) {
    td.getToDoList().subscribe(jsonTodo => {
      console.log(jsonTodo);
      this.todo = jsonTodo;
    });
  }

  method1() {
    console.log('Sdsdsd');
    for (let i = 0; i < this.todo.length; i++) {
      if (this.todo[i].id === 10) {
        console.log(this.todo[i]);
      }
    }
  }

  clearList() {
    this.todo = [];
    let newDiv1 = document.createElement('p');
    newDiv1.style.backgroundColor = 'yellow';
    newDiv1.style.textAlign = 'center';
    newDiv1.innerText = 'What did you do?';
    document.body.appendChild(newDiv1);
  }
}
