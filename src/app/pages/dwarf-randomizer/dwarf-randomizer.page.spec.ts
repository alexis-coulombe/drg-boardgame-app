import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DwarfRandomizerPage } from './dwarf-randomizer.page';

describe('DwarfRandomizerPage', () => {
  let component: DwarfRandomizerPage;
  let fixture: ComponentFixture<DwarfRandomizerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DwarfRandomizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
