import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoUI';
  searchTaskId: number | undefined;

  constructor(private router: Router) {}

  // Función para realizar la búsqueda
  searchTask() {
    if (this.searchTaskId) {
      // Redirigir a la vista de detalles de la tarea con el ID especificado
      this.router.navigate(['/tasks', this.searchTaskId]);
    }
  }
}
