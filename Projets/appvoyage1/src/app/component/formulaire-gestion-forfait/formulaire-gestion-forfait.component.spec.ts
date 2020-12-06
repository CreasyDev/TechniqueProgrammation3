import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireGestionForfaitComponent } from './formulaire-gestion-forfait.component';

describe('FormulaireGestionForfaitComponent', () => {
  let component: FormulaireGestionForfaitComponent;
  let fixture: ComponentFixture<FormulaireGestionForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireGestionForfaitComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireGestionForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
