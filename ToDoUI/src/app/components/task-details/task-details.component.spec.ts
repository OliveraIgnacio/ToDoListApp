// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { TaskDetailsComponent } from './task-details.component';
// import { ActivatedRoute, convertToParamMap } from '@angular/router';
// import { of } from 'rxjs';
// import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar el módulo de prueba de HttpClient
// import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
// import { MatIconTestingModule } from '@angular/material/icon/testing';

// describe('TaskDetailsComponent', () => {
//   let component: TaskDetailsComponent;
//   let fixture: ComponentFixture<TaskDetailsComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [TaskDetailsComponent],
//       imports: [HttpClientTestingModule, MatIconModule],
//       providers: [
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             paramMap: of(convertToParamMap({ id: 1 })),
//           },
//         },
//       ],
//     });

//      // Configurar MatIconRegistryTestingModule
//      TestBed.overrideModule(MatIconModule, {
//         remove: {
//           imports: [MatIconTestingModule],
//         },
//         add: {
//           imports: [MatIconTestingModule],
//         },
//       });

//     fixture = TestBed.createComponent(TaskDetailsComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should display taks details', () => {
//     //Simular datos de tarea
//     const task = {
//         taskId: 1,
//         title: 'Test Task',
//         description: 'This is a test task',
//         dueDate: new Date(),
//         isCompleted: false,
//     };

//     //Asignar datos de tarea al componente
//     component.task = task;

//     //Actualizar la vista
//     fixture.detectChanges();

//     //Verificar que los datos de la tarea se muestrenn correctamente
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.task-title').textContent).toContain(task.title);
//     expect(compiled.querySelector('.task-description').textContent).toContain(task.description);
//   })
// });
