import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbyssBarModulePage } from './abyss-bar-module.page';

describe('AbyssBarModulePage', () => {
  let component: AbyssBarModulePage;
  let fixture: ComponentFixture<AbyssBarModulePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AbyssBarModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
