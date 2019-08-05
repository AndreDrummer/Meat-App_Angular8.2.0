import { Component, OnInit, Input, AfterContentInit, ContentChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-content',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() errorMessage: any;
  @Input() lable: string

  input: any;

  @ContentChild(NgModel, {static: false}) model: NgModel; // static false = Angular 8

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model
    if (this.input === undefined) {
      throw new Error('This compoenent should be used with a ngModel directive.');
    }
  }

  hasSuccess() {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError() {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
