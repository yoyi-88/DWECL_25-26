import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaClientes } from './alta-clientes';

describe('AltaClientes', () => {
  let component: AltaClientes;
  let fixture: ComponentFixture<AltaClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaClientes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaClientes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
