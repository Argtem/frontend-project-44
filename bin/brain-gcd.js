import readlineSync from 'readline-sync';
function calculateGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


function gcd() {
    const correctNeeded = 3
    let correct = 0

    while (correct!=correctNeeded){
    const a = Math.floor(Math.random() * 100)
    const b = Math.floor(Math.random() * 100)
    const correctAnswer = calculateGCD(a, b);
    console.log("Find the greatest common divisor of given numbers.")
    const answer = readlineSync.question(`Question: ${a} ${b}\n`);
    console.log(`Your answer: ${answer}`);
    if (Number(answer) == correctAnswer) {
            console.log("Correct!");
            correct++;} else {
                console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n let's try again`)
                break
            }

}
    }
gcd()