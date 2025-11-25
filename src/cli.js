import readlineSync from 'readline-sync';
const name = readlineSync.question('May I have your name?');
function sayYourName() {
    console.log(`Hello, ${name}`)
}
export {name, sayYourName}