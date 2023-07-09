import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEstadiaComponent } from './read-estadia.component';

describe('ReadEstadiaComponent', () => {
  let component: ReadEstadiaComponent;
  let fixture: ComponentFixture<ReadEstadiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadEstadiaComponent]
    });
    fixture = TestBed.createComponent(ReadEstadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
