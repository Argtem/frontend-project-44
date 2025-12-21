#!/usr/bin/env node
import { sayYourName } from '../src/cli.js'
import readlineSync from 'readline-sync'

function calcGame(user = sayYourName()) {
  let correct = 0
  const need = 3
  while (correct < need) {
    const a = Math.floor(Math.random() * 100)
    const b = Math.floor(Math.random() * 100)
    const sign = Math.floor(Math.random() * 3) + 1
    console.log('What is the result of the expression?')
    if (sign === 1) {
      const correctAnswer = a + b
      const answer = readlineSync.question(`Question: ${a} + ${b} `)
      console.log(`Your answer: ${answer}`)
      if (Number(answer) === correctAnswer) {
        console.log('Correct!')
        correct++
        if (correct === need) {
          console.log(`Congratulations, ${user}!`)
        }
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${user}!`)
        break
      }
    } else if (sign === 2) {
      const correctAnswer = a - b
      const answer = readlineSync.question(`Question: ${a} - ${b}`)
      console.log(`Your answer: ${answer}`)
      if (Number(answer) === correctAnswer) {
        console.log('Correct!')
        correct++
        if (correct === need) {
          console.log(`Congratulations, ${user}!`)
        }
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${user}!`)
        break
      }
    } else if (sign === 3) {
      const correctAnswer = a * b
      const answer = readlineSync.question(`Question: ${a} * ${b}`)
      console.log(`Your answer: ${answer}`)
      if (Number(answer) === correctAnswer) {
        console.log('Correct!')
        correct++
        if (correct === need) {
          console.log(`Congratulations, ${user}!`)
        }
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${user}!`)
        break
      }
    }
  }
}

calcGame()
