import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEstadiaComponent } from './add-edit-estadia.component';

describe('AddEditEstadiaComponent', () => {
  let component: AddEditEstadiaComponent;
  let fixture: ComponentFixture<AddEditEstadiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditEstadiaComponent]
    });
    fixture = TestBed.createComponent(AddEditEstadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
