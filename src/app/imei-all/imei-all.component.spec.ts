import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImeiAllComponent } from './imei-all.component';

describe('ImeiAllComponent', () => {
  let component: ImeiAllComponent;
  let fixture: ComponentFixture<ImeiAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImeiAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImeiAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
