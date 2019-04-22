import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenPageComponent } from './template-driven-page.component';

describe('TemplateDrivenPageComponent', () => {
  let component: TemplateDrivenPageComponent;
  let fixture: ComponentFixture<TemplateDrivenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
