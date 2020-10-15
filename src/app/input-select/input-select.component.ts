import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSelectComponent),
    multi: true
  }]
})
export class InputSelectComponent implements OnInit, ControlValueAccessor {
  private val: string;

  get value() {
    return this.val;
  }

  set value(value: string) {
    this.val = value;
    this.onChange(this.val);
    this.onTouch(this.val);
  }

  @Input() options: Array<string>;

  isDisabled: boolean;

  constructor() {
  }

  ngOnInit(): void {
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
