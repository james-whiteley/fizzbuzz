import { DividedByRule } from './rule-types/DividedByRule';

/**
 * Class that creates rule for replacing multiples of 3 with 'Fizz'
 */
export class FizzRule extends DividedByRule {
  constructor() {
    super('Fizz', 3);
  }
}
