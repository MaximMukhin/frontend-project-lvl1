import readlineSync from 'readline-sync';
import { massage } from '../src/massage.js';

export const prime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  const primeNumber = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return 'no';
    }
    return num > 1 ? 'yes' : 'no';
  };

  for (let i = 0; i < 3; i++) {

    const value = Math.floor(Math.random() * 23)
    const answer = primeNumber(value)
    console.log(`Question: ${value}`)

    const answerUser = readlineSync.question('Your answer: ');

    if (answer === answerUser) {
      console.log('Correct!')
    } else {
      return massage(answerUser, answer, name)
    }

  }
  return console.log(`Congratulations, ${name}!`)
}
