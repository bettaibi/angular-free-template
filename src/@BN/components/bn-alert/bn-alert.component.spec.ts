import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnAlertComponent } from './bn-alert.component';

describe('BnAlertComponent', () => {
  let component: BnAlertComponent;
  let fixture: ComponentFixture<BnAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BnAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
