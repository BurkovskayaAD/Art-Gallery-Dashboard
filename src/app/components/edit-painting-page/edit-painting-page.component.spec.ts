import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaintingPageComponent } from './edit-painting-page.component';

describe('EditPaintingPageComponent', () => {
  let component: EditPaintingPageComponent;
  let fixture: ComponentFixture<EditPaintingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPaintingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaintingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
