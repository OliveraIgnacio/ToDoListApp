// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableModule } from '@angular/material/table';
// import { RouterTestingModule } from '@angular/router/testing';
// import { of } from 'rxjs';
// import { Task } from 'src/app/models/task.model';
// import { TaskService } from '../../services/task/task.service';
// import { TaskListComponent } from './task-list.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { BrowserAnimationsModule, NoopAnimationsModule  } from '@angular/platform-browser/animations';
// import { MatIconModule } from '@angular/material/icon';

// describe('TaskListComponent', () => {
//   let component: TaskListComponent;
//   let fixture: ComponentFixture<TaskListComponent>;
//   let taskService: TaskService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [TaskListComponent],
//       imports: [
//         MatPaginatorModule,
//         MatTableModule,
//         RouterTestingModule,
//         HttpClientTestingModule, 
//         BrowserAnimationsModule,
//         MatIconModule,
//         NoopAnimationsModule 
//       ],
//       providers: [TaskService],
//     }).compileComponents();

//     fixture = TestBed.createComponent(TaskListComponent);
//     component = fixture.componentInstance;
//     taskService = TestBed.inject(TaskService);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   describe('when tasks are present', () => {
//     const tasks: Task[] = [
//       // Mock some tasks for testing
//       { taskId: 1, title: 'Task 1', description: 'Description 1', dueDate: new Date(), isCompleted: false },
//       { taskId: 2, title: 'Task 2', description: 'Description 2', dueDate: new Date(), isCompleted: true },
//       // Add more tasks as needed
//     ];

//     beforeEach(() => {
//       spyOn(taskService, 'getTasks').and.returnValue(of(tasks));
//       component.ngOnInit(); // Load tasks
//       fixture.detectChanges();
//     });

//     it('should display tasks', () => {
//       const compiled = fixture.debugElement.nativeElement;
//       expect(compiled.querySelector('mat-table')).toBeTruthy();
//       // Check for the presence of tasks in the DOM
//       tasks.forEach(task => {
//         expect(compiled.textContent).toContain(task.title);
//         // Add similar checks for other task properties as needed
//       });
//     });

//     it('should display action buttons for each task', () => {
//       const compiled = fixture.debugElement.nativeElement;
//       // Check for the presence of action buttons in the DOM for each task
//       tasks.forEach(task => {
//         expect(compiled.textContent).toContain(`Edit ${task.taskId}`);
//         expect(compiled.textContent).toContain(`Delete ${task.taskId}`);
//       });
//     });

//     // Add more tests as needed for different scenarios
//   });

//   describe('when no tasks are present', () => {
//     beforeEach(() => {
//       spyOn(taskService, 'getTasks').and.returnValue(of([]));
//       component.ngOnInit(); // Load tasks
//       fixture.detectChanges();
//     });

//     it('should display a message about no tasks', () => {
//       const compiled = fixture.debugElement.nativeElement;
//       expect(compiled.querySelector('mat-table')).toBeFalsy(); // Table should not be present
//       expect(compiled.textContent).toContain('No tasks available.');
//     });
//   });

//   // Add more tests as needed for other scenarios (e.g., navigation, deletion, etc.)
// });
