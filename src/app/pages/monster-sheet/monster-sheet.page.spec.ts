import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonsterSheetPage } from './monster-sheet.page';

describe('DeepdivePage', () => {
  let component: MonsterSheetPage;
  let fixture: ComponentFixture<MonsterSheetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonsterSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
