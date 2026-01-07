import { Component } from '@angular/core';
// import { NgForOf } from "../../../node_modules/@angular/common/types/_common_module-chunk";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
showCompleted = true;
tasks = [
  {name:"Learn HTML",completed:true},
  {name:"Learn CSS",completed:false},
  {name:"build app with Angular ",completed:false},
]
toggleCompletedTasks()
{
  this.showCompleted= !this.showCompleted
}
toggleTask(task:any)
{
  task.completed = !task.completed
}
}
