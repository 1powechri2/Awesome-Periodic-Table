import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleQuantityComponent } from './mole-quantity.component';

describe('MoleQuantityComponent', () => {
  let component: MoleQuantityComponent;
  let fixture: ComponentFixture<MoleQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoleQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
