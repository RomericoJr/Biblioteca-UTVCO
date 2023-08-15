import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartListComponent } from './apart-list.component';

describe('ApartListComponent', () => {
  let component: ApartListComponent;
  let fixture: ComponentFixture<ApartListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartListComponent]
    });
    fixture = TestBed.createComponent(ApartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
