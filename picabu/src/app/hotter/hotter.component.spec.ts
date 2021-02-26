import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotterComponent } from './hotter.component';

describe('HotterComponent', () => {
  let component: HotterComponent;
  let fixture: ComponentFixture<HotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotterComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
