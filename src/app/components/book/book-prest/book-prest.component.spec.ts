import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPrestComponent } from './book-prest.component';

describe('BookPrestComponent', () => {
  let component: BookPrestComponent;
  let fixture: ComponentFixture<BookPrestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookPrestComponent]
    });
    fixture = TestBed.createComponent(BookPrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
