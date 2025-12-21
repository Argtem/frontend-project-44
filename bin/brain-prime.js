#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { sayYourName } from '../src/cli.js'

function isPrime(num) {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  const limit = Math.sqrt(num)
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false
  }
  return true
}

function primeGame(user = sayYourName()) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  const correctNeeded = 3
  let correct = 0

  while (correct !== correctNeeded) {
    const number = Math.floor(Math.random() * 100) + 1
    const correctAnswer = isPrime(number) ? 'yes' : 'no'

    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ').toLowerCase()

    if (answer === correctAnswer) {
      console.log('Correct!')
      correct++
      if (correct === correctNeeded) {
        console.log(`Congratulations, ${user}!`)
        break
      }
    } 
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${user}!`)
      break
    }
  }
}

primeGame()