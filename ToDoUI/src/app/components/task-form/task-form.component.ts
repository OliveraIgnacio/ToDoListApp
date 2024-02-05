// task-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task/task.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  taskId: number | undefined;
  isEditing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
      description: ['', Validators.maxLength(200)],
      dueDate: ['', [Validators.required, this.validateDate]],
      isCompleted: [false],
    });
    
  }

  ngOnInit(): void {
    // Si hay un parámetro 'id' en la URL, carga la tarea existente para editar
    this.route.params.subscribe(params => {
      this.taskId = +params['id']; // Convertir a número
      if (this.taskId) {
        this.isEditing = true;
        this.taskService.getTask(this.taskId).subscribe(task => {
          // Poblar el formulario con los datos de la tarea existente
          this.taskForm.patchValue({
            title: task.title,
            description: task.description,
            dueDate: this.formatDate(task.dueDate),
            isCompleted: task.isCompleted
          });
        });
      }
    });
  }

 formatDate(inputDate: Date): Date {
    const date = new Date(inputDate);
    console.log(inputDate)
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    console.log(`${day}/${month}/${year}`)
  
    return new Date(`${day}/${month}/${year}`)
    //  return new Date(inputDate);
  }

  validateDate(control: any): {[key: string]: boolean} | null {
    const currentDate = new Date();
    const inputDate = new Date(control.value);
  
    // Verifica si la fecha ingresada es válida
    if (isNaN(inputDate.getTime())) {
      return { 'invalidDate': true };
    }
  
    // Verifica si la fecha ingresada está en el pasado
    if (inputDate < currentDate) {
      return { 'pastDate': true };
    }
  
    // Verifica si la fecha ingresada está más de 3 años en el futuro
    const maxFutureDate = new Date(currentDate);
    maxFutureDate.setFullYear(maxFutureDate.getFullYear() + 3);
  
    if (inputDate > maxFutureDate) {
      return { 'futureDate': true };
    }
 
    return null;
  }
  

  saveTask() {
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;
      console.log('task', formValue)
      if (this.isEditing) {
        // Modo edición: Actualizar la tarea existente
        formValue.taskId = this.taskId
        this.taskService.updateTask(this.taskId!, formValue).subscribe(() => {
          // Redirigir a la vista principal después de guardar
          this.router.navigate(['/tasks']);
        });
      } else {
        // Modo creación: Añadir una nueva tarea
        this.taskService.addTask(formValue).subscribe(() => {
          // Redirigir a la vista principal después de guardar
          this.router.navigate(['/tasks']);
        });
      }
    }
  }
}
