import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styles: []
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery;
  @Input() itemsValue

  total() {
    return this.delivery + this.itemsValue;
  }

  ngOnInit() {
  }

  constructor() { }


}
