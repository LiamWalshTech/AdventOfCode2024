import { reports } from "./inputs.mjs";
// safetyRuleTwo - are all adjacent numbers a difference of at least 1 but max of 3

const passedSafetyRuleOne = (report) => {
    const ascendingList = [...report].sort((a, b) => a - b)
    const descendingList = [...report].sort((a, b) => a - b).reverse()

    const isAllAscending = report.toString() === ascendingList.toString()
    const isAllDescending = report.toString() === descendingList.toString()

    console.log('report', report)
    // console.log('ascendingList', ascendingList)
    // console.log('descendingList', descendingList)
    // console.log('isAllAscending', isAllAscending)
    // console.log('isAllDescending', isAllDescending)
    console.log('passed?', isAllAscending || isAllDescending)

    return isAllAscending || isAllDescending ? true : false
}

const passedSafetyRuleTwo = (report) => {
    let lastLevel = null

    report.forEach(level => {
        if (!lastLevel) {
            lastLevel = level

            return
        }

        const levelDiff = Math.abs(level - lastLevel)
        
        if (levelDiff >= 1 && levelDiff <= 3) {
            lastLevel = level

            return true
        } else {
            return false
        }
    })

    return true
}


const numberOfSafeReports = reports.reduce((acc, report) =>
    passedSafetyRuleOne(report) && passedSafetyRuleTwo(report) ? acc + 1 : acc
, 0)

console.log('Answer for part one:', numberOfSafeReports)