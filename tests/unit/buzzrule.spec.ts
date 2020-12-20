import 'mocha';
import { expect } from 'chai';
import { BuzzRule } from '../../src/rules/BuzzRule';

describe('BuzzRule Class Functions', () => {
  let buzzRuleClass: BuzzRule;

  beforeEach(() => {
    buzzRuleClass = new BuzzRule();
  });

  describe('replaceString Getter Unit Tests', () => {
    const replacementString = 'Buzz';
    let result: string;

    beforeEach(() => {
      result = buzzRuleClass.replacementString;
    });

    it('should return a string', () => {
      expect(result).to.be.a('string');
    });

    it('should return a string equal to the string passed to constructor', () => {
      expect(result).to.be.eq(replacementString);
    });
  });

  describe('numberMatchesRule() Unit Tests', () => {
    it('should return a boolean', () => {
      const result: boolean | TypeError = buzzRuleClass.numberMatchesRule(1);
      expect(result).to.be.a('boolean');
    });

    it('should return true when number is divisible by 5', () => {
      const result: boolean | TypeError = buzzRuleClass.numberMatchesRule(10);
      expect(result).to.be.true;
    });

    it('should return false when number is not divisible by 5', () => {
      const result: boolean | TypeError = buzzRuleClass.numberMatchesRule(2);
      expect(result).to.be.false;
    });

    it('should returns an error if anything other than number passed', () => {
      // @ts-ignore
      const result: boolean | TypeError = buzzRuleClass.numberMatchesRule('Ten');
      expect(result).to.be.an.instanceOf(Error).with.property('message', 'argument should be a number');
    });
  });
});
