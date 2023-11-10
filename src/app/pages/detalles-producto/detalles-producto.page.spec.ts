import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesProductoPage } from './detalles-producto.page';

describe('DetallesProductoPage', () => {
  let component: DetallesProductoPage;
  let fixture: ComponentFixture<DetallesProductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallesProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
