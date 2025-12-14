import readlineSync from 'readline-sync';
function sayYourName() {
    const user = readlineSync.question('May I have your name?')
    console.log(`Hello, ${user}`)
    return user
}
export {sayYourName}