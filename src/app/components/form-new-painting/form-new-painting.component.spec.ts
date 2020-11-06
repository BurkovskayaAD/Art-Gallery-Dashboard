import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewPaintingComponent } from './form-new-painting.component';

describe('FormNewPaintingComponent', () => {
  let component: FormNewPaintingComponent;
  let fixture: ComponentFixture<FormNewPaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewPaintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
