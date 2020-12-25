import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExhibitionFormComponent } from './edit-exhibition-form.component';

describe('EditExhibitionFormComponent', () => {
  let component: EditExhibitionFormComponent;
  let fixture: ComponentFixture<EditExhibitionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExhibitionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExhibitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
