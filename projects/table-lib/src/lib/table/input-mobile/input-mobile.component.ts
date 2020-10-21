import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'tl-input-mobile',
  templateUrl: './input-mobile.component.html',
  styleUrls: ['./input-mobile.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputMobileComponent),
    multi: true
  }]
})
export class InputMobileComponent implements ControlValueAccessor {
  private val: string;

  private inputPlaceholder: string;

  private inputPattern: string;

  isDisabled: boolean;

  constructor() {
  }

  get value(): string {
    return this.val;
  }

  set value(value: string) {
    this.val = value;
    this.onChange(this.val);
    this.onTouch(this.val);
  }

  get placeholder() {
    return this.inputPlaceholder || '';
  }

  @Input('inputPlaceholder')
  set placeholder(placeholder: string) {
    this.inputPlaceholder = placeholder;
  }

  get pattern() {
    return this.inputPattern || '';
  }

  @Input()
  set pattern(pattern: string) {
    this.inputPattern = pattern;
  }

  private onChange: Function;

  private onTouch: Function;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.val = obj;
  }
}
