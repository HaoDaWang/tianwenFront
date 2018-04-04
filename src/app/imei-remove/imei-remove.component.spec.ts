import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImeiRemoveComponent } from './imei-remove.component';

describe('ImeiRemoveComponent', () => {
  let component: ImeiRemoveComponent;
  let fixture: ComponentFixture<ImeiRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImeiRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImeiRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
