import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input-mobile',
  templateUrl: './input-mobile.component.html',
  styleUrls: ['./input-mobile.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputMobileComponent),
    multi: true
  }]
})
export class InputMobileComponent implements OnInit, ControlValueAccessor {
  private _value: string;

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  @Input() inputPlaceholder: string;
  @Input() inputPattern: string;
  disabled: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  private _onChange: any = (_: string) => {
  };

  private _onTouch: any = (_: string) => {
  };

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this._value = obj;
  }
}
