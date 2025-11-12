import readlineSync from 'readline-sync';
function sayYourName() {
    const name = readlineSync.question('May I have your name? ');

    return `Hello, ${name}`
}
export {sayYourName}