import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'tl-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSelectComponent),
    multi: true
  }]
})
export class InputSelectComponent implements ControlValueAccessor {
  private val: string;

  @Input() options: Array<string>;

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

  private onChange: (_: string) => void;

  private onTouch: (_: string) => void;

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
