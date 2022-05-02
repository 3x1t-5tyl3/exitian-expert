function ringRec(inputItem, outputItem) {
    event.shaped(outputItem, [
        "RRR",
        "R R",
        "RRR"
    ], {
        R: inputItem
    })
}

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

function expPlate(inputItem, outputItem) {
    event.shaped(outputItem, [
        " R ",
        " R ",
        " R "
    ], {
        R: inputItem
    })
}

function cheapGear(inputItem, outputItem) {
    event.recipes.immersiveengineeringMetalPress(output, inputItem, "i")
}

function expRod(inputItem, outputItem) {
    event.shaped(outputItem, [
        " R ",
        " R ",
        " R "
    ], {
        R: inputItem
    })
}