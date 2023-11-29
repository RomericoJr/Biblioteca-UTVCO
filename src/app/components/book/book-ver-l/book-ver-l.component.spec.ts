import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookVerLComponent } from './book-ver-l.component';

describe('BookVerLComponent', () => {
  let component: BookVerLComponent;
  let fixture: ComponentFixture<BookVerLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookVerLComponent]
    });
    fixture = TestBed.createComponent(BookVerLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
