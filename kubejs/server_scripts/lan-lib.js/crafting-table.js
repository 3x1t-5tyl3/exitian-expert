/**
 * Ring recipe
 * @param {string} inputItem ingredient
 * @param {string} outputItem what this recipe creates
 */
 function ringRec(inputItem, outputItem) {
    event.shaped(outputItem, [
        "RRR",
        "R R",
        "RRR"
    ], {
        R: inputItem
    })
}

/**
 * Expensive gear recipe
 * @param {string} inputItem ingredient
 * @param {string} inputItem2 second ingredient
 * @param {string} outputItem what this recipe creates
 */
function expGear(inputItem, inputItem2, outputItem) {
    event.shaped(outputItem, [
        "RIR",
        "I I",
        "RIR"
    ], {
        R: inputItem,
        I: inputItem2
    })
}

/**
 * Expensive plate recipe
 * @param {string} inputItem ingredient
 * @param {string} outputItem what this recipe creates
 */
function expPlate(inputItem, outputItem) {
    event.shaped(outputItem, [
        "R",
        "R",
        "R"
    ], {
        R: inputItem
    })
}

/**
 * Ring recipe
 * @param {string} inputItem ingredient
 * @param {string} outputItem what this recipe creates
 */
function expRod(inputItem, outputItem) {
    event.shaped(outputItem, [
        "R",
        "R",
        "R"
    ], {
        R: inputItem
    })
}
