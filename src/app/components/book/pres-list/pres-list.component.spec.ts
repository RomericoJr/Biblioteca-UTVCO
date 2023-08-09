import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresListComponent } from './pres-list.component';

describe('PresListComponent', () => {
  let component: PresListComponent;
  let fixture: ComponentFixture<PresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresListComponent]
    });
    fixture = TestBed.createComponent(PresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
