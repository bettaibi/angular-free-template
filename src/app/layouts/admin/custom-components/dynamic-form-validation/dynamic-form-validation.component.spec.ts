import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormValidationComponent } from './dynamic-form-validation.component';

describe('DynamicFormValidationComponent', () => {
  let component: DynamicFormValidationComponent;
  let fixture: ComponentFixture<DynamicFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
