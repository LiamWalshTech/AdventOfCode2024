import { readFileSync } from 'node:fs'

const puzzleInput = readFileSync('/workspaces/AdventOfCode2024/3/input.txt', 'utf-8');

const stripDownToMulStrings = (input) => input.match(/mul\(\d{1,3}\,\d{1,3}\)/g)
const handleDosAndDonts = (input) => input.match(/do\(\)|mul\(\d{1,3}\,\d{1,3}\)|don't\(\)/g)
const mul = (firstNumber, secondNumber) => firstNumber * secondNumber

const sumOfMuls = stripDownToMulStrings(puzzleInput).reduce((accumulator, mulFunc) => {
    const mulResult = eval(mulFunc)

    return accumulator + mulResult
}, 0)

console.log('Answer for part one:', sumOfMuls)

const sumOfMulsWithDosAndDonts = handleDosAndDonts(puzzleInput).reduce((accumulator, mulFunc) => {

    if (['do()', `don't()`].includes(mulFunc) || !accumulator.mulInstructionsEnabled) {
        return {
            ...accumulator,
            mulInstructionsEnabled: mulFunc === 'do()' ? true : false
        }
    }

    const mulResult = eval(mulFunc)

    return {
        ...accumulator,
        sum: accumulator.sum + mulResult
    }
}, {mulInstructionsEnabled: true, sum: 0})

console.log('Answer for part two:', sumOfMulsWithDosAndDonts.sum)


