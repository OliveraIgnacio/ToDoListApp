import { Component, ViewChild } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from '../../services/task/task.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];
  dataSource: MatTableDataSource<Task>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(private taskService: TaskService, private router: Router){
    this.dataSource = new MatTableDataSource<Task>(this.tasks);
  }


  ngOnInit(){
    this.loadTasks();
  }

  loadTasks(){
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.dataSource.data = this.tasks; // Actualiza el dataSource con las nuevas tareas
    });
  }

  // Método para navegar a la vista de detalles al hacer clic en la fila
  navigateToDetails(taskId: number) {
    this.router.navigate(['/tasks/', taskId]);
  }
  
  editTask(taskId: number): void {
    // Redirige al formulario de edición con el ID de la tarea
    this.router.navigate(['/tasks/edit', taskId]);
  }

  
  deleteTask(taskId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      this.taskService.deleteTask(taskId).subscribe(() => {
        // Recargar la lista de tareas después de eliminar
        this.loadTasks();
      });
    }
  }
  
}
