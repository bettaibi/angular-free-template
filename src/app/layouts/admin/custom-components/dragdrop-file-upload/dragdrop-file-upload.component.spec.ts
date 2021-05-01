import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropFileUploadComponent } from './dragdrop-file-upload.component';

describe('DragdropFileUploadComponent', () => {
  let component: DragdropFileUploadComponent;
  let fixture: ComponentFixture<DragdropFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragdropFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
