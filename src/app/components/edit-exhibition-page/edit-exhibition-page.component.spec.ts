import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExhibitionPageComponent } from './edit-exhibition-page.component';

describe('EditExhibitionPageComponent', () => {
  let component: EditExhibitionPageComponent;
  let fixture: ComponentFixture<EditExhibitionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExhibitionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExhibitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
