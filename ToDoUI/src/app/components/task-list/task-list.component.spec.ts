import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task/task.service';
import { of } from 'rxjs';



describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let taskService: jasmine.SpyObj<TaskService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      imports:[HttpClientTestingModule, MatPaginatorModule, MatTableModule, NoopAnimationsModule],
      providers:[TaskService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize tasks array', () => {
    expect(component.tasks).toEqual([]);
  });

  beforeEach(() => {
    // Configuración antes de cada prueba
    taskService = jasmine.createSpyObj<TaskService>('TaskService', ['getTasks']);
    component = new TaskListComponent(taskService, jasmine.createSpyObj('Router', ['navigate']));
  });

  it('should load tasks on ngOnInit', () => {
    const mockTasks: Task[] = [
      { taskId: 1, title: 'Task 1', description: 'Description 1', dueDate: new Date(), isCompleted: false },
      { taskId: 2, title: 'Task 2', description: 'Description 2', dueDate: new Date(), isCompleted: true }
    ];

    taskService.getTasks.and.returnValue(of(mockTasks));

    component.ngOnInit();

    expect(component.tasks).toEqual(mockTasks);
  });
   
});
