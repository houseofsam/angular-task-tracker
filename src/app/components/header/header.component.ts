import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; //to figure out current route

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
  constructor(private uiService: UiService, private router: Router) {
    // watch the subscription that we added in
    this.subscription = this.uiService.onToggle().subscribe(value => {
      console.log('4');
      this.showAddTask = value
    });
    // watcher the onToggle function in uiService
   }

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('1');
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return (this.router.url === route); //boolean
  }
}
