import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlmuerzosPage } from './almuerzos.page';

describe('AlmuerzosPage', () => {
  let component: AlmuerzosPage;
  let fixture: ComponentFixture<AlmuerzosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlmuerzosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
