import { Injectable } from '@angular/core';
//1 import http client and make sure httpClientModule is imported in app.module
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'; //2 private property

  // 3. similar to bringing in service to component (see tasks.component), must add httpClient as a provider in constructor
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl); //4 get request but make sure to declare type <Task[]>
  }

  // will return an Observable... declare with TS
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
