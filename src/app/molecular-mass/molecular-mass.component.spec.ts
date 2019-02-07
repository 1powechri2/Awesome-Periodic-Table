import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MolecularMassComponent } from './molecular-mass.component';

describe('MolecularMassComponent', () => {
  let component: MolecularMassComponent;
  let fixture: ComponentFixture<MolecularMassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MolecularMassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MolecularMassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
