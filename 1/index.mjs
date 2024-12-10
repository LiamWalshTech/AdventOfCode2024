import { leftList, rightList } from "./inputs.mjs"

leftList.sort()
rightList.sort()

const distances = leftList.map((value, index) => {
    const distanceBetween = Math.abs(rightList[index] - value)

    return distanceBetween
})

const totalDistance = distances.reduce((acc, distance) => acc + distance, 0)

console.log('Part One answer:', totalDistance)

const similarities = leftList.map(leftNumber => {
    const leftNumberCount = rightList.reduce((acc, rightNumber) => {
        return leftNumber === rightNumber ? acc + 1 : acc
    }, 0)

    return leftNumberCount * leftNumber
})

const similarityScore = similarities.reduce((acc, score) => acc + score, 0)

console.log('Part two answer:', similarityScore)