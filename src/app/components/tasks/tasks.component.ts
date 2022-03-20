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

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        // filter out from UI
        () => (this.tasks = this.tasks.filter(t => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    // console.log('Adding task', task);
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

}
