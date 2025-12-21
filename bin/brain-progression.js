#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { sayYourName } from '../src/cli.js'

function generateProgression() {
  const length = Math.floor(Math.random() * 6) + 5
  const start = Math.floor(Math.random() * 20) + 1
  const step = Math.floor(Math.random() * 10) + 1
  const hiddenIndex = Math.floor(Math.random() * length)

  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + step * i)
  }

  return {
    progression,
    hiddenIndex,
    correctAnswer: progression[hiddenIndex],
    progressionWithHidden: progression
      .map((num, index) => (index === hiddenIndex ? '..' : num))
      .join(' '),
  }
}

function progressionGame(user = sayYourName()) {
  console.log('What number is missing in the progression?')

  const correctNeeded = 3
  let correct = 0

  while (correct !== correctNeeded) {
    const { progressionWithHidden, correctAnswer } = generateProgression()

    console.log(`Question: ${progressionWithHidden}`)
    const answer = readlineSync.question('Your answer: ')

    if (Number(answer) === correctAnswer) {
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

progressionGame()
