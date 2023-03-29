import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task:Task;
  @Output() onDeleteEmitter: EventEmitter<Task>=new EventEmitter;
  @Output() onToggleReminder: EventEmitter<Task>=new EventEmitter;
  faTimes=faTimes;
  onDelete(task){
    this.onDeleteEmitter.emit(task)
  }
  ToggleReminder(task){
    this.onToggleReminder.emit(task);
  }
  
}
