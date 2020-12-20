import { Rule } from '../Rule';

/**
 * Abstract class to define structure of DividedByRule class, allowing the
 * creation of rule classes that match numbers by a divisor
 */
export abstract class DividedByRule extends Rule {
  // Number to divide by
  private _divisor: number;

  constructor(replacementString: string, divisor: number) {
    super(replacementString);
    this._divisor = divisor;
  }

  /**
   * Checks if number is divisible by divisor
   * @param number number - Number to check if matches rule
   * @returns boolean - if number divides by divisor
   */
  numberMatchesRule(number: number): boolean | TypeError {
    if (typeof number != 'number') {
      return new TypeError('argument should be a number');
    }

    return number % this._divisor === 0;
  }
}
