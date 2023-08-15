import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadiaListComponent } from './estadia-list.component';

describe('EstadiaListComponent', () => {
  let component: EstadiaListComponent;
  let fixture: ComponentFixture<EstadiaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadiaListComponent]
    });
    fixture = TestBed.createComponent(EstadiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
