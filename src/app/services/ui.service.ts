import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    console.log('2');
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // fire off when toggled
  onToggle(): Observable<any> {
    console.log('3'); //this is actually '0'.. 1 and done
    return this.subject.asObservable();
  }

}
