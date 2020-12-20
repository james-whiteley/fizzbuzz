import { Container } from 'typescript-ioc';
import { Rule } from './Rule';
import { FizzRule } from './FizzRule';
import { BuzzRule } from './BuzzRule';

/**
 * Class to build array of rules to be injected into FizzBuzz class
 */
export class RuleCollection extends Array<Rule> {
  constructor() {
    super();
    this.push(Container.get(FizzRule) as Rule);
    this.push(Container.get(BuzzRule) as Rule);
  }
}
