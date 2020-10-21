import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputMobileComponent} from './input-mobile.component';
import {FormsModule} from '@angular/forms';

describe('InputMobileComponent', () => {
  let component: InputMobileComponent;
  let fixture: ComponentFixture<InputMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputMobileComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
