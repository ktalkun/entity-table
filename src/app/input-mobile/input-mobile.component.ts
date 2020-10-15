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
  private val: string;

  get value(): string {
    return this.val;
  }

  set value(value: string) {
    this.val = value;
    this.onChange(this.val);
    this.onTouch(this.val);
  }

  @Input() placeholder: string;

  @Input() pattern: string;

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
