import { Container } from 'typescript-ioc';
import { FizzRule } from './FizzRule';
import { BuzzRule } from './BuzzRule';
import { RuleInterface } from '../RuleInterface';

/**
 * Class to build array of rules to be injected into FizzBuzz class
 */
export class RuleCollection extends Array<RuleInterface> {
  constructor() {
    super();
    this.push(Container.get(FizzRule) as RuleInterface);
    this.push(Container.get(BuzzRule) as RuleInterface);
  }
}
