import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookGeneroComponent } from './add-book-genero.component';

describe('AddBookGeneroComponent', () => {
  let component: AddBookGeneroComponent;
  let fixture: ComponentFixture<AddBookGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookGeneroComponent]
    });
    fixture = TestBed.createComponent(AddBookGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
