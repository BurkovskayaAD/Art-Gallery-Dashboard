import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewExhibitionComponent } from './form-new-exhibition.component';

describe('FormNewExhibitionComponent', () => {
  let component: FormNewExhibitionComponent;
  let fixture: ComponentFixture<FormNewExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewExhibitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
