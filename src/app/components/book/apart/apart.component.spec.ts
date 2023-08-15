import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartComponent } from './apart.component';

describe('ApartComponent', () => {
  let component: ApartComponent;
  let fixture: ComponentFixture<ApartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartComponent]
    });
    fixture = TestBed.createComponent(ApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
