import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdTemplateComponent } from './curd-template.component';

describe('CurdTemplateComponent', () => {
  let component: CurdTemplateComponent;
  let fixture: ComponentFixture<CurdTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
