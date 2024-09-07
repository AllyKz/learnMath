import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Testing1Page } from './testing1.page';

describe('Testing1Page', () => {
  let component: Testing1Page;
  let fixture: ComponentFixture<Testing1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
