import { Container } from 'typescript-ioc';
import { FizzBuzz } from './FizzBuzz';

const fizzBuzz: FizzBuzz = Container.get(FizzBuzz);
console.log(fizzBuzz.generateOutput(100));
