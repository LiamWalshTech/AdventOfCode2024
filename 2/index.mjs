import { reports } from "./inputs.mjs";
// safetyRuleTwo - are all adjacent numbers a difference of at least 1 but max of 3

const passedSafetyRuleOne = (report) => {
    const ascendingList = [...report].sort((a, b) => a - b)
    const descendingList = [...report].sort((a, b) => a - b).reverse()

    const isAllAscending = report.toString() === ascendingList.toString()
    const isAllDescending = report.toString() === descendingList.toString()

    return isAllAscending || isAllDescending ? true : false
}

const passedSafetyRuleTwo = (report) => {
    let passed = true

    for (let index = 1; index < report.length; index++) {
        const level = report[index]
        const lastLevel = report[index - 1]

        const levelDiff = Math.abs(level - lastLevel)
        
        if (levelDiff >= 1 && levelDiff <= 3) {
            null
        } else {
            passed = false
        }
    }

    return passed
}

const passedDampenerRule = (report) => {
    let numberOfBadLevels = 0
    const reportPassedRuleOne = passedSafetyRuleOne(report)
    const reportPassedRuleTwo = passedSafetyRuleTwo(report)

    if (!reportPassedRuleOne || !reportPassedRuleTwo) {
        for (let index = 0; index < report.length; index++) {
            const copiedReport = [...report];
            copiedReport.splice(index, 1)
    
            const passedRuleOne = passedSafetyRuleOne(copiedReport)
            const passedRuleTwo = passedSafetyRuleTwo(copiedReport)

    
            if (passedRuleOne && passedRuleTwo) {
                return true
            } else {
                numberOfBadLevels++
            }
        }
    }

    const passed = numberOfBadLevels <= 1

    return passed
}


const numberOfSafeReports = reports.reduce((acc, report) => {
    const passedRuleOne = passedSafetyRuleOne(report)
    const passedRuleTwo = passedSafetyRuleTwo(report)

    return passedRuleOne && passedRuleTwo ? acc + 1 : acc
}
, 0)

console.log('Answer for part one:', numberOfSafeReports)

const numberOfSafeReportsPartTwo = reports.reduce((acc, report) => {
    const passedDampener = passedDampenerRule(report)

    return  passedDampener ? acc + 1 : acc
}
, 0)

console.log('Answer for part two:', numberOfSafeReportsPartTwo)