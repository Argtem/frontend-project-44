import readlineSync from 'readline-sync';
function calcGame () {
    let correct = 0
    const need = 3
    while (correct<need){
    const a = Math.floor(Math.random() * 100)
    const b = Math.floor(Math.random() * 100)
    const sign = Math.floor(Math.random() * 3) + 1
    if (sign==1) {
        const correctAnswer = a+b
        const answer = readlineSync.question(`What is ${a} + ${b} answer equals to? `);
        console.log(`Your answer: ${answer}`);
        if (Number(answer) === correctAnswer) {
            console.log("Correct!");
            correct++;} else {
                `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
            }

    } else if (sign == 2) {
        const correctAnswer = a-b
        const answer = readlineSync.question(`What is ${a} - ${b} answer equals to? `);
        console.log(`Your answer: ${answer}`);
        if (Number(answer) === correctAnswer) {
            console.log("Correct!");
            correct++;} else {
                `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
            }
    } else if (sign==3) {
        const correctAnswer = a*b
        const answer = readlineSync.question(`What is ${a} * ${b} answer equals to? `);
        console.log(`Your answer: ${answer}`);
        if (Number(answer) === correctAnswer) {
            console.log("Correct!");
            correct++;} else {
                `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
            }
    }}
}
calcGame()