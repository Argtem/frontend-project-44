#!/usr/bin/env node
import { sayYourName } from '../src/cli.js'
import { calcGame } from './brain-calc.js'
import { evenGame } from './brain-even.js';
import { primeGame } from './brain-prime.js';
import { progressionGame } from './brain-progression.js';
import { gcd } from './brain-gcd.js';
import readlineSync from 'readline-sync';
console.log("Welcome to the Brain Games!")
function gameStart() {
    let continueOrNot = 'yes';
    let user = sayYourName()
    let pickedGame = readlineSync.question()
    if (pickedGame == "game-calc") {
        calcGame(user)
    } else if (pickedGame == "even-game") {
        evenGame(user)
    } else if (pickedGame == 'prime-even') {
        primeGame(user)
    } else if (pickedGame == "brain-gcd") {
        gcd(user)
    } else if (pickedGame == 'brain-progression') {
        progressionGame(user)
    } else if(pickedGame=="exit") {
        continueOrNot="no"
    }

}
gameStart()