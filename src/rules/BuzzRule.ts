import { DividedByRule } from './rule-types/DividedByRule';

/**
 * Class that creates rule for replacing multiples of 5 with 'Buzz'
 */
export class BuzzRule extends DividedByRule {
  constructor() {
    super('Buzz', 5);
  }
}
