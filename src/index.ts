import { Container } from 'typescript-ioc';
import { FizzBuzz } from './FizzBuzz';

const fizzBuzz = Container.get(FizzBuzz);
console.log(fizzBuzz.generateOutput(100));
