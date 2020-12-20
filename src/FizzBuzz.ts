import { Inject } from 'typescript-ioc';
import { RuleCollection } from './rules/RuleCollection';
import { StringOrNumber, StringOrNumberArray } from './Types';

/**
 * Class to generate list of numbers or replacement strings where rule apply
 */
export class FizzBuzz {
  // Array of rules
  private _rules: RuleCollection;

  constructor(@Inject rules: RuleCollection) {
    this._rules = rules;
  }

  /**
   * Generates list of numbers and strings where rules apply
   * @param maxNumber - Maximum number to print up to
   * @returns StringOrNumberArray | TypeError output - Array of strings or numbers or an error if type other than number passed
   */
  generateOutput(maxNumber: number): StringOrNumberArray | TypeError {
    if (typeof maxNumber != 'number') {
      return new TypeError('argument should be a number');
    }

    const output: StringOrNumberArray = [];

    // Loop through numbers up to max number and replace where appropriate
    for (let i = 1; i <= maxNumber; i++) {
      output.push(this.replace(i));
    }

    return output;
  }

  /**
   * Replace number with string where appropriate
   * @param number - Number to replace with string if rule applies
   * @returns StringOrNumber
   */
  private replace(number: number): StringOrNumber {
    if (typeof number != 'number') {
      throw new TypeError('argument should be a number');
    }

    let replacementString = '';

    // Apply each rule to number
    for (const rule of this._rules) {
      // If rule matches append replacement string to string
      if (rule.numberMatchesRule(number)) {
        replacementString += rule.replacementString;
      }
    }

    // Return string if number matched any rule, otherwise return number
    return replacementString.length > 0 ? replacementString : number;
  }
}
