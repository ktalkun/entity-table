import {Component, forwardRef, Input, OnInit} from '@angular/core';
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
export class InputTextComponent implements OnInit, ControlValueAccessor {
  private _value: string;

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this._onChange(this._value);
    this._onTouch(this._value);
  }

  @Input() placeholder: string;

  disabled: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  private _onChange: any = (_: string) => {
  }

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

  writeValue(value: any): void {
    this._value = value
  }
}
