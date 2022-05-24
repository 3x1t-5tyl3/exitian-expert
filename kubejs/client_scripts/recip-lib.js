let debug = true;

/**
 * Generates copyable recipe-text.
 * 
 * @param {event} event
 * Pass the event to the function
 * 
 * @param {string} recipeType
 * Shows the type of recipe in the output
 * 
 * @param {string} recipeOutput
 * The recipe output string used by KubeJS
 * 
 * @param {number} [accColor=ACC_COLOR]
 * Default is defined by the constant
 * 
 * @param {number} [defColor=DEF_COLOR]
 * Default is defined by the constant
 */
function copyRecipeText(event, recipeType, recipeOutput, accColor, defColor) {

    if (accColor == undefined) {
        accColor = ACC_COLOR
    }

    if (defColor == undefined) {
        defColor = DEF_COLOR
    }

    return event.player.tell([
        Text.of("Click ").color(defColor),
        Text.of("[HERE]").color(accColor).click(`copy:${recipeOutput}`).hover(recipeType),
        Text.of(" to copy the recipe!").color(defColor)
    ])
}

/** 
 * Returns an array for a recipe
 * 
 * @param {object} inputInventory
 * The inventory object
 * 
 * @param {number} inputInventorySize
 * Inventory size
 * 
 * @param {number} [recipeOffset=0]
 * Recipe offset
 * 
 * @param {boolean} [ignoreLastRows=true]
 * If it should ignore the last 2 rows of the chest. 
 * 
 * @returns {String[]}
 * Returns the array of ingredients and the recipe output.
 */

function getIngredients(inputInventory, inputInventorySize, recipeOffset, ignoreLastRows) {
    ingrdtArr = [];
    offsetMp = 3
    totalOffset = offsetMp * recipeOffset
    recipeSet = [];
    matrixRowOffset = 0

    for (let i = 0; i < RECIPE_SET.length; i++) {
        setItem = RECIPE_SET[i]
        setItem += totalOffset
        recipeSet.push(setItem)
    }

    if (recipeOffset == undefined) {
        recipeOffset = 0
    }

    if (ignoreLastRows == undefined) {
        ignoreLastRows = true
    }
    if (ignoreLastRows) {
        inputInventorySize - 24
    }

    for (let i = 0; i < inputInventorySize; i++) {
        if (recipeSet.includes(i)) {
            item = inputInventory.get(i)
            ingrdtArr.push(item + "")
        }
    }
    return ingrdtArr, recipeOutput
}

function getRecMatrix(event, inputInventory, inputInventorySize) {
    let ingrdtMtx = [];
    let recipeSet = [];

    let currentItemIndex = 0
    let rowOffset = 0
    let currentItem;
    let useLowerRow = false;

    for (let i = 0; i < inputInventorySize; i++) {

        if (currentItemIndex > 35) {
            useLowerRow = false;
        } else {
            useLowerRow = true;
        }

        currentItem = inputInventory.get(i + (useLowerRow ? 0 : 35))

        if (debug) {
            event.player.tell(useLowerRow + " | " + currentItemIndex + " | " + currentItem)
        }

        currentItemIndex++


    }

    return ingrdtMtx, recipeOutput
}

/**
 * Generates a wooden sword with the recipetype as the name.
 * 
 * @param {string} recipeType
 * Recipetype input
 * @returns {string}
 * Returns the command string
 */
function recSword(recipeType) {
    string = `/give @p minecraft:wooden_sword{Damage:0,display:{Name:'[{"text":"${recipeType}"}]'}}`
    return string
}