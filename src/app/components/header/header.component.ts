import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  // to use service, must add it to constructor ..why?
  constructor(private uiService: UiService) {
    // watch the subscription that we added in
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
    // watcher the onToggle function in uiService
   }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
