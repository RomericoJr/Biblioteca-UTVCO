import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDonarComponent } from './books-donar.component';

describe('BooksDonarComponent', () => {
  let component: BooksDonarComponent;
  let fixture: ComponentFixture<BooksDonarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksDonarComponent]
    });
    fixture = TestBed.createComponent(BooksDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
