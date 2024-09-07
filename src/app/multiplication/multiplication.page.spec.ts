import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicationPage } from './multiplication.page';

describe('MultiplicationPage', () => {
  let component: MultiplicationPage;
  let fixture: ComponentFixture<MultiplicationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
