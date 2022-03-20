import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service'; //1
import { Subscription } from 'rxjs'; //1.2
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  // when working with forms, put a property for each field in component class
  text: string;
  day: string;
  reminder: boolean = false; //set default value
  // must implement a 2-way data-binding btw. properties above and input (w/ form ngModule --must import in app.module)

  showAddTask: boolean; //3
  subscription: Subscription; //3.2

  constructor(private uiService: UiService) { //2
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a task!');
      return;
    }

    // new object that's created based on form inputs
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // TO-DO: Emit Event
    this.onAddTask.emit(newTask)

    // reset form values upon submit
    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
