import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereListComponent } from './genere-list.component';

describe('GenereListComponent', () => {
  let component: GenereListComponent;
  let fixture: ComponentFixture<GenereListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenereListComponent]
    });
    fixture = TestBed.createComponent(GenereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
