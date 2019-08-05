import { Component, OnInit } from '@angular/core';

import { RadioOptions } from '../shared/radio/radio-options.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOptions[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Crédito', value: 'CRE' },
    { label: 'Vale Refeição', value: 'REF' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
