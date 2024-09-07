import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubstractionPage } from './substraction.page';

describe('SubstractionPage', () => {
  let component: SubstractionPage;
  let fixture: ComponentFixture<SubstractionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstractionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
