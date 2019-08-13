class Order {
  constructor (
    public address: string,
    public number: number,
    public addressOptional: string,
    public paymentOption: string,
    public orderItem: OrderItems[] = []
  ) { }
}

class OrderItems {
  constructor(public quantity: number, public menuId: string) { }
}

export { Order, OrderItems }
