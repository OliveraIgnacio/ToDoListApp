import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    // Suscribirse a los cambios en los parámetros de la ruta
    this.route.params.subscribe(params => {
      const taskId = params['id'];
    
      // Obtener los detalles de la tarea utilizando el servicio TaskService
      this.taskService.getTask(taskId).subscribe(
        (task) => {
          this.task = task;
        },
        (error) => {
          console.error('Error al cargar los detalles de la tarea:', error);
          // Manejar el error según sea necesario (redirigir, mostrar un mensaje, etc.)
        }
      );
    });
  }

  editTask(): void {
    if (this.task) {
      this.router.navigate(['/tasks/edit', this.task.taskId]);
    }
  }

  // Función para navegar de regreso a la lista de tareas
  navigateBack() {
    this.router.navigate(['/tasks']);
  }
}
