import 'mocha';
import { expect, use } from 'chai';
import { mock, instance, when, anyNumber } from 'ts-mockito';
import { FizzBuzz } from '../../src/FizzBuzz';
import { Rule } from '../../src/rules/Rule';
import { RuleCollection } from '../../src/rules/RuleCollection';
import { StringOrNumberArray } from '../../src/Types';
import assertArrays from 'chai-arrays';
use(assertArrays);

describe('FizzBuzz Class Functions', () => {
  let fizzBuzzClass: FizzBuzz;

  beforeEach(() => {
    // Create mock Fizz and Buzz derived classes and instances from Rule abstract class
    const fizzRuleMock: Rule = mock<Rule>();
    const buzzRuleMock: Rule = mock<Rule>();
    const fizzRuleInstance: Rule = instance(fizzRuleMock);
    const buzzRuleInstance: Rule = instance(buzzRuleMock);

    // Mock numberMatchesRule() function and replacementString getter for FizzRule class
    when(fizzRuleMock.numberMatchesRule(anyNumber())).thenCall((number: number): boolean => {
      return number % 3 === 0;
    });

    when(fizzRuleMock.replacementString).thenReturn('Fizz');

    // Mock numberMatchesRule() function and replacementString getter for BuzzRule class
    when(buzzRuleMock.numberMatchesRule(anyNumber())).thenCall((number: number): boolean => {
      return number % 5 === 0;
    });

    when(buzzRuleMock.replacementString).thenReturn('Buzz');

    // Mock RuleCollection class injected into FizzBuzz class
    const ruleCollection: RuleCollection = [fizzRuleInstance, buzzRuleInstance];
    fizzBuzzClass = new FizzBuzz(ruleCollection);
  });

  describe('generateOutput() Unit Tests', () => {
    let result: StringOrNumberArray | TypeError;

    beforeEach(async () => {
      // Call function under test
      result = fizzBuzzClass.generateOutput(15);
    });

    it('should return an array', () => {
      expect(result).to.be.array;
    });

    it('should return an array with 15 elements', () => {
      expect(result).to.be.ofSize(15);
    });

    it('should return an array with numbers replaced with word appropriately', () => {
      expect(result).to.be.equalTo([
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz',
      ]);
    });

    it('should return empty array if negative number passed', () => {
      result = fizzBuzzClass.generateOutput(-1);
      expect(result).to.be.ofSize(0);
    });

    it('should returns an error if anything other than number passed', () => {
      // @ts-ignore
      result = fizzBuzzClass.generateOutput('Ten');
      expect(result).to.be.an.instanceOf(Error).with.property('message', 'argument should be a number');
    });
  });
});
