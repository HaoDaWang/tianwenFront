import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImeiAddComponent } from './imei-add.component';

describe('ImeiAddComponent', () => {
  let component: ImeiAddComponent;
  let fixture: ComponentFixture<ImeiAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImeiAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImeiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
