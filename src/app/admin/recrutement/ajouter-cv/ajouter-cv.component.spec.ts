import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCvComponent } from './ajouter-cv.component';

describe('AjouterCvComponent', () => {
  let component: AjouterCvComponent;
  let fixture: ComponentFixture<AjouterCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
