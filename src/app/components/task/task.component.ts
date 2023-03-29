import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[]=[]
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>{this.tasks=this.tasks.filter(t=>t.id !== task.id)});

   }
  addTask(Task){
    this.taskService.addTask(Task).subscribe((task)=>{this.tasks.push(task)});

  }
  constructor(private taskService:TaskService){

  }
  ToggleReminder(task:Task){
    task.reminder=!task.reminder
    this.taskService.ToggleReminder(task).subscribe();
  }
  ngOnInit(): void {
       this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
  }
}
