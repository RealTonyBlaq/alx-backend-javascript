import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') this._amount = amount;
    else throw new TypeError('Amount must be a number');

    if (currency instanceof Currency) this._currency = currency();
    else throw new TypeError('Currency must be an instance of the class Currency');
  }

  get amount() {
    return this._amount;
  }
}
