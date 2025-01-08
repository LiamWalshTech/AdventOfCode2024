import { readFileSync } from 'node:fs'
import assert from 'node:assert'
import { join } from 'node:path';

const examplePuzzleInput = readFileSync('/workspaces/AdventOfCode2024/4/example.txt', 'utf-8');
const puzzleInput = readFileSync('/workspaces/AdventOfCode2024/4/input.txt', 'utf-8');

const convertInputToMatrix = (input) => input.split('\n').map(row => row.split(''))

const findVerticalWords = (inputMatrix) => {
    let verticalMatches = 0

    inputMatrix.forEach((matrixRow, rowIndex) => {
      matrixRow.forEach((character, columnIndex) => {
        if (rowIndex + 3 >= inputMatrix.length) {
            return
        }

        const downOne = inputMatrix[rowIndex + 1][columnIndex]
        const downTwo = inputMatrix[rowIndex + 2][columnIndex]
        const downThree = inputMatrix[rowIndex + 3][columnIndex]

        const joinedDown = [character, downOne, downTwo, downThree].join('')

        if (joinedDown === 'XMAS') {
            console.log(joinedDown, character, rowIndex, columnIndex)
            verticalMatches++
        }

        if (joinedDown === 'SAMX') {
            console.log(joinedDown, character, rowIndex, columnIndex)
            verticalMatches++
        }
      })  
    })

    return verticalMatches
}

const findAllXmas = (puzzleText) => {
    const puzzleMatrix = convertInputToMatrix(puzzleText)

    const allHorizontal = puzzleText.match(/XMAS/g).length
    const allBackwards = puzzleText.match(/SAMX/g).length
    const allVertical = findVerticalWords(puzzleMatrix)

    console.log(allHorizontal, allBackwards, allVertical)

    const sumOfAll = allHorizontal + allBackwards + allVertical

    return sumOfAll
}

console.log(findAllXmas(examplePuzzleInput))

// assert.strictEqual(findAllXmas(examplePuzzleInput), 18)

console.log('Answer for part one:')