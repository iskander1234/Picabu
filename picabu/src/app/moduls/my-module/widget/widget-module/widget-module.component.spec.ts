import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetModuleComponent } from './widget-module.component';

describe('WidgetModuleComponent', () => {
  let component: WidgetModuleComponent;
  let fixture: ComponentFixture<WidgetModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
