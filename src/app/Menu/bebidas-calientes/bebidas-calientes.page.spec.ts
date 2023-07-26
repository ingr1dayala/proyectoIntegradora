import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BebidasCalientesPage } from './bebidas-calientes.page';

describe('BebidasCalientesPage', () => {
  let component: BebidasCalientesPage;
  let fixture: ComponentFixture<BebidasCalientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BebidasCalientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
