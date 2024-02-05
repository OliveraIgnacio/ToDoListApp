import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskDetailsComponent } from './task-details.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { TaskService } from 'src/app/services/task/task.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';

describe('TaskDetailComponent', () => {
  let component: TaskDetailsComponent;
  let fixture: ComponentFixture<TaskDetailsComponent>;

  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: jasmine.createSpy('get').and.returnValue('1') // Simulamos el id de la tarea en la ruta
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, MatIconModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }), // Simula que se proporciona el parámetro de la ruta
          },
        },
        TaskService, // Agregamos TaskService como proveedor
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize task property', () => {
    expect(component.task).toBeDefined();
    expect(component.task).toBeNull(); 
  });
  
  
});
