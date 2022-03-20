import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'; //1
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // Assign tasks as a property for component
  tasks: Task[] = []; //2 declare empty array

  // 3 to use a service, must add it as a provider in constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // get tasks on component load... since it is an observable, must subscribe in a promise-like fashion
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

}
