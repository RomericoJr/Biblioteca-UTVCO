import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAdmComponent } from './inicio-adm.component';

describe('InicioAdmComponent', () => {
  let component: InicioAdmComponent;
  let fixture: ComponentFixture<InicioAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioAdmComponent]
    });
    fixture = TestBed.createComponent(InicioAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
