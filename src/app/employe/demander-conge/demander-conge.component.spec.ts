import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderCongeComponent } from './demander-conge.component';

describe('DemanderCongeComponent', () => {
  let component: DemanderCongeComponent;
  let fixture: ComponentFixture<DemanderCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanderCongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
