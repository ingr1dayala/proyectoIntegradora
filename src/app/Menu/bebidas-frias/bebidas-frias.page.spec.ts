import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BebidasFriasPage } from './bebidas-frias.page';

describe('BebidasFriasPage', () => {
  let component: BebidasFriasPage;
  let fixture: ComponentFixture<BebidasFriasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BebidasFriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
