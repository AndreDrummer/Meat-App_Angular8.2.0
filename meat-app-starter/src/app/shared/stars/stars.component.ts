import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'mt-stars',
  templateUrl: './stars.component.html',
  styles: []
})
export class StarsComponent implements OnInit {

  rates = [1, 2, 3, 4, 5];

  rate = 0;

  previousRate: number;

  @Output() rated = new EventEmitter<number>();

  setRate(value) {
    this.rate = value;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }


  setTemporaryRate(value) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.previousRate = value;
  }

  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
