import readlineSync from 'readline-sync';
import {massage} from '../src/massage.js';

export const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let answer = 'no';

  for (let i = 0; i < 3; i++) {

    const value = Math.floor(Math.random() * 40)
    console.log(`Question: ${value}`)
    const answerUser = readlineSync.question('Your answer: ');

    if (value % 2 === 0) {
      answer = 'yes';
    }

    if (value % 2 === 0 && answerUser === 'yes') {
      console.log('Correct!')
    }

    if (value % 2 !== 0 && answerUser === 'no') {
      console.log('Correct!')
    }

    if (value % 2 === 0 && answerUser === 'no') {
      return massage(answerUser, answer, name)
    }

    if (value % 2 !== 0 && answerUser === 'yes') {
      return massage(answerUser, answer, name)
    }
  }
  return console.log(`Congratulations, ${name}!`)
}

