import readlineSync from 'readline-sync';
import { massage } from '../src/massage.js';

export const progression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  const randomNum = (range, shift = 0) => Math.round(shift + Math.random() * range);

  for (let i = 0; i < 3; i++) {

    const length = randomNum(5, 5);
    const position = randomNum(length - 1);
    const step = randomNum(10);
    let num = randomNum(15, 1);
    const Arr = [num];
    for (let i = 0; i < length - 1; i += 1) {
      num += step;
      Arr.push(num);
    }
    const answer = Arr[position];
    Arr[position] = '..';

    console.log(`Question: ${Arr.join(' ')}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (answer === Number(answerUser)) {
      console.log('Correct!')
    } else {
      return massage(answerUser, answer, name)
    }

  }
  return console.log(`Congratulations, ${name}!`)

}