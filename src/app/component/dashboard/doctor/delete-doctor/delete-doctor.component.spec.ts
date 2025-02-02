import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDoctorComponent } from './delete-doctor.component';

describe('DeleteDoctorComponent', () => {
  let component: DeleteDoctorComponent;
  let fixture: ComponentFixture<DeleteDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});