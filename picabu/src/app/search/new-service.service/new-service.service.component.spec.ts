import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServiceServiceComponent } from './new-service.service.component';

describe('NewService.ServiceComponent', () => {
  let component: NewServiceServiceComponent;
  let fixture: ComponentFixture<NewServiceServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewServiceServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewServiceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
