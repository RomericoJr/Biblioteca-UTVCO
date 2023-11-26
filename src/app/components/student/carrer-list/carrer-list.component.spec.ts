import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerListComponent } from './carrer-list.component';

describe('CarrerListComponent', () => {
  let component: CarrerListComponent;
  let fixture: ComponentFixture<CarrerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrerListComponent]
    });
    fixture = TestBed.createComponent(CarrerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
