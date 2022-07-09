import readlineSync from 'readline-sync';
import { massage } from '../src/massage.js';

export const calc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?')

  for (let i = 0; i < 3; i++) {

    const value = Math.floor(Math.random() * 100)
    const value2 = Math.floor(Math.random() * 100)
    let sum = 0;

    if (Math.random() <= 0.66) {
      sum = value + value2
      console.log(`Question: ${value} + ${value2}`)
    }

    else if (Math.random() <= 0.33) {
      sum = value - value2
      console.log(`Question: ${value} - ${value2}`)
    }

    else {
      sum = value * value2
      console.log(`Question: ${value} * ${value2}`)
    }
    const answerUser = readlineSync.question('Your answer: ');

    if (sum === Number(answerUser)) {
      console.log('Correct!')
    } else {
      return massage(answerUser, sum, name)
    }

  }
  return console.log(`Congratulations, ${name}!`)
}