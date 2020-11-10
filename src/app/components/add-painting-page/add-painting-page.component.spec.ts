import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaintingPageComponent } from './add-painting-page.component';

describe('AddPaintingPageComponent', () => {
  let component: AddPaintingPageComponent;
  let fixture: ComponentFixture<AddPaintingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaintingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaintingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
