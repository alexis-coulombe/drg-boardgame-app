import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunityModsPage } from './community-mods.page';

describe('CommunityModsPage', () => {
  let component: CommunityModsPage;
  let fixture: ComponentFixture<CommunityModsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommunityModsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
