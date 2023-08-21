import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeepdivePage } from './deepdive.page';

describe('DeepdivePage', () => {
  let component: DeepdivePage;
  let fixture: ComponentFixture<DeepdivePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeepdivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
