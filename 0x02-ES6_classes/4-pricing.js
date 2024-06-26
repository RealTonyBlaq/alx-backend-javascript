import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') this._amount = amount;
    else throw new TypeError('Amount must be a number');

    if (currency instanceof Currency) this._currency = currency;
    else throw new TypeError('Currency must be an instance of currency');
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value === 'number') this._amount = value;
    else throw new TypeError('Amount must be a number');
  }

  get currency() {
    return this._currency;
  }

  set currency(valueFunction) {
    if (valueFunction instanceof Currency) this._currency = valueFunction;
    else throw new TypeError('Currency must be an instance of currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new TypeError('Params must be a number');
  }
}
