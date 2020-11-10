import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExhibitionPageComponent } from './add-exhibition-page.component';

describe('AddExhibitionPageComponent', () => {
  let component: AddExhibitionPageComponent;
  let fixture: ComponentFixture<AddExhibitionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExhibitionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExhibitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
