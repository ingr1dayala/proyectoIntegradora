import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComidaRapidaPage } from './comida-rapida.page';

describe('ComidaRapidaPage', () => {
  let component: ComidaRapidaPage;
  let fixture: ComponentFixture<ComidaRapidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComidaRapidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
