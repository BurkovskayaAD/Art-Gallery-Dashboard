import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaintingFormComponent } from './edit-painting-form.component';

describe('EditPaintingFormComponent', () => {
  let component: EditPaintingFormComponent;
  let fixture: ComponentFixture<EditPaintingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPaintingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaintingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
