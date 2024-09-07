import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProjPage } from './home-proj.page';

describe('HomeProjPage', () => {
  let component: HomeProjPage;
  let fixture: ComponentFixture<HomeProjPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
