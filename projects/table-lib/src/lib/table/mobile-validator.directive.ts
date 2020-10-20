import {Directive, ElementRef, Input} from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from "@angular/forms";

@Directive({
  selector: '[tlMobileValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MobileValidatorDirective,
    multi: true
  }]
})
export class MobileValidatorDirective implements Validator {
  @Input('mobilePattern') mobilePattern: string;
  private element: ElementRef;

  constructor(private el: ElementRef) {
    this.element = el;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.mobilePattern) {
      let errors: ValidationErrors = this.testValue(control);
      if (control.touched || control.dirty) {
        if (errors) {
          this.element.nativeElement.children[0].classList.add('input-error');
        } else {
          this.element.nativeElement.children[0].classList.remove('input-error');
        }
      }
      return errors;
    }
    return null;
  }

  private testValue(control: AbstractControl): ValidationErrors | null {
    const isAllow: boolean = new RegExp(this.mobilePattern).test(control.value);
    return isAllow ? null : {forbiddenMobile: {value: control.value}};
  }
}
