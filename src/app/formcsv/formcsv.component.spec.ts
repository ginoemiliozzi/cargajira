import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcsvComponent } from './formcsv.component';

describe('FormcsvComponent', () => {
  let component: FormcsvComponent;
  let fixture: ComponentFixture<FormcsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
