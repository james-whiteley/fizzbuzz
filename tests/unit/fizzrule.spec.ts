import 'mocha';
import { expect } from 'chai';
import { FizzRule } from '../../src/rules/FizzRule';

describe('FizzRule Class Functions', () => {
  let fizzRuleClass: FizzRule;

  beforeEach(() => {
    fizzRuleClass = new FizzRule();
  });

  describe('replaceString Getter Unit Tests', () => {
    const replacementString = 'Fizz';
    let result: string;

    beforeEach(() => {
      result = fizzRuleClass.replacementString;
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
      const result: boolean | TypeError = fizzRuleClass.numberMatchesRule(1);
      expect(result).to.be.a('boolean');
    });

    it('should return true when number is divisible by 3', () => {
      const result: boolean | TypeError = fizzRuleClass.numberMatchesRule(9);
      expect(result).to.be.true;
    });

    it('should return false when number is not divisible by 3', () => {
      const result: boolean | TypeError = fizzRuleClass.numberMatchesRule(2);
      expect(result).to.be.false;
    });

    it('should throw an error if anything other than number passed', () => {
      // @ts-ignore
      const result: boolean | TypeError = fizzRuleClass.numberMatchesRule('Ten');
      expect(result).to.be.an.instanceOf(Error).with.property('message', 'argument should be a number');
    });
  });
});
