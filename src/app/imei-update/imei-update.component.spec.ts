import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImeiUpdateComponent } from './imei-update.component';

describe('ImeiUpdateComponent', () => {
  let component: ImeiUpdateComponent;
  let fixture: ComponentFixture<ImeiUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImeiUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImeiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
