#!/usr/bin/env node
import readlineSync from 'readline-sync';

function evenGame(user= undefined) {
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
            if (correctAnswers == requiredCorrect) {
                    console.log(`Congratulations, ${user}!`)
                }
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            console.log(`Let's try again, ${user}!`);
            break
        }
    }
}

evenGame()