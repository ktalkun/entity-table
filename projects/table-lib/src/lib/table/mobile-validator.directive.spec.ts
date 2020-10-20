import {MobileValidatorDirective} from './mobile-validator.directive';
import {ElementRef} from "@angular/core";

describe('MobileValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new MobileValidatorDirective(new ElementRef<any>(ElementRef));
    expect(directive).toBeTruthy();
  });
});
