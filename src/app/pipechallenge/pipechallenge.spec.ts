import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipechallenge } from './pipechallenge';

describe('Pipechallenge', () => {
  let component: Pipechallenge;
  let fixture: ComponentFixture<Pipechallenge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipechallenge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipechallenge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
