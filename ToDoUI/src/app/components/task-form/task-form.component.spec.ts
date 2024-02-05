import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskFormComponent } from './task-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      imports: [ReactiveFormsModule, 
        HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,],
      providers: [
        FormBuilder,
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
      ],
    });

    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
  });

  it('debería inicializar el formulario correctamente', () => {
    expect(component.taskForm.valid).toBeFalse();
  });

  it('should be invalid when form is empty', () => {
    expect(component.taskForm.valid).toBeFalsy();
  });
});
