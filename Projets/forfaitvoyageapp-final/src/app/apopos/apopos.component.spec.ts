import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoposComponent } from './apopos.component';

describe('ApoposComponent', () => {
  let component: ApoposComponent;
  let fixture: ComponentFixture<ApoposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
