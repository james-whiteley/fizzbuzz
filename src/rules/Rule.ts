import { RuleInterface } from '../RuleInterface';

/**
 * Abstract class to define structure of Rule classes
 */
export abstract class Rule implements RuleInterface {
  // String to replace number with, where appropriate
  private _replacementString: string;

  constructor(replacementString: string) {
    this._replacementString = replacementString;
  }

  /**
   * Replacement string getter
   */
  get replacementString(): string {
    return this._replacementString;
  }

  /**
   * Define rule that number must satisfy to be replaced with _replacementString in output
   * @param number number - Number to check if matches rule
   * @returns boolean
   */
  abstract numberMatchesRule(number: number): boolean | TypeError;
}
