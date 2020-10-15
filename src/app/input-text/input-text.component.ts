import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true
  }]
})
export class InputTextComponent implements ControlValueAccessor {
  private val: string;

  get value() {
    return this.val;
  }

  set value(value: string) {
    this.val = value;
    this.onChange(this.val);
    this.onTouch(this.val);
  }

  @Input() placeholder: string;

  isDisabled: boolean;

  constructor() {
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
    this.val = obj
  }
}
