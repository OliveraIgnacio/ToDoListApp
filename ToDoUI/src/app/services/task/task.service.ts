import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  public apiUrl = "http://localhost:5004/api/tasks";

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Obtener una tarea específica por su ID
  getTask(taskId: number): Observable<Task> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.get<Task>(url);
  }

  // Actualizar una tarea existente por su ID
  updateTask(taskId: number, task: Task): Observable<Task> {
    console.log(task)
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.put<Task>(url, task);
  }

   // Añadir una nueva tarea
   addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  deleteTask(taskId: number): Observable<void> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.delete<void>(url);
  }

}
