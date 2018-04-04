import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImeiFindComponent } from './imei-find.component';

describe('ImeiFindComponent', () => {
  let component: ImeiFindComponent;
  let fixture: ComponentFixture<ImeiFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImeiFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImeiFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
