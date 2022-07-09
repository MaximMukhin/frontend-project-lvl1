import readlineSync from 'readline-sync';
import { massage } from '../src/massage.js';

export const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.')

  for (let i = 0; i < 3; i++) {

    const value = Math.floor(Math.random() * 50)
    const value2 = Math.floor(Math.random() * 50)

    let divider = value < value2 ? value : value2;
    while (value % divider || value2 % divider) {
      divider -= 1;
    }
    const answer = divider;

    console.log(`Question: ${value} ${value2}`)
    const answerUser = readlineSync.question('Your answer: ');


    if (answer === Number(answerUser)) {
      console.log('Correct!')
    } else {
      return massage(answerUser, answer, name)
    }

  }
  return console.log(`Congratulations, ${name}!`)
}
