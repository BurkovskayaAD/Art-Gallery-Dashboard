import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionTemplateComponent } from './introduction-template.component';

describe('IntroductionTemplateComponent', () => {
  let component: IntroductionTemplateComponent;
  let fixture: ComponentFixture<IntroductionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
