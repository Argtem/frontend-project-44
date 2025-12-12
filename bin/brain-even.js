#!/usr/bin/env node
import readlineSync from 'readline-sync';

function evenGame(userName) {
    let correctAnswers = 0;
    const requiredCorrect = 3;
    
    while (correctAnswers < requiredCorrect) {
        const randomInt = Math.floor(Math.random() * 100) + 1;
        const isEven = randomInt % 2 === 0;
        const correctAnswer = isEven ? 'yes' : 'no';
        
        
        const answer = readlineSync.question(`Is ${randomInt} even? Answer "yes" or "no": `).toLowerCase();
        console.log(`Your answer: ${answer}`);

        if (answer === correctAnswer) {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            console.log(`Let's try again, ${userName}!`);
            correctAnswers= 0
        }
    }
    console.log(`Congratulations, ${userName}!`);
}

export { evenGame };