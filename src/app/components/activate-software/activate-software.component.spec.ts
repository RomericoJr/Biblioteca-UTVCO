import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateSoftwareComponent } from './activate-software.component';

describe('ActivateSoftwareComponent', () => {
  let component: ActivateSoftwareComponent;
  let fixture: ComponentFixture<ActivateSoftwareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivateSoftwareComponent]
    });
    fixture = TestBed.createComponent(ActivateSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
