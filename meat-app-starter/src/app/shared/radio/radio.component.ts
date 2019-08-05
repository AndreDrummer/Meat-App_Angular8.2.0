import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RadioOptions } from './radio-options.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      useExisting:  forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  value: any;
  onChange: any;

  @Input() options: RadioOptions[];

  constructor() { }

  ngOnInit() {
  }

  setValue(value: string) {
    this.value = value;
    this.onChange(this.value)
  }

  writeValue(obj: any) {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched() { }

}
