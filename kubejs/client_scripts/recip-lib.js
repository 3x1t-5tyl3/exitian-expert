
/**
 * Generates copyable recipe-text.
 * @param {event} event Pass the event to the function
 * @param {string} recipeType Shows the type of recipe in the output
 * @param {string} recipeOutput The recipe output string used by KubeJS
 * @param {number} [accColor=ACC_COLOR] Default is defined by the constant
 * @param {number} [defColor=DEF_COLOR] Default is defined by the constant
 */
function copyRecipeText(event, recipeType, recipeOutput, accColor, defColor) {

    if (accColor == undefined || accColor == null) {
        accColor = ACC_COLOR
    }

    if (defColor == undefined || defColor == null) {
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
 * @param {object} inputInventory The inventory object
 * @param {number} inputInventorySize Inventory size
 * @param {number} [recipeOffset=0] Recipe offset
 * @param {boolean} [ignoreLastRows=true] If it should ignore the last 2 rows of the chest. 
 * @returns {String[]} Returns the array of ingredients and the recipe output.
 */
function getIngredients(inputInventory, inputInventorySize, recipeOffset, ignoreLastRows) {
    itemArray = [];
    offsetMp = 3
    totalOffset = offsetMp * recipeOffset
    recipeSet = [];
    matrixRowOffset = 0

    for (let i = 0; i < RECIPE_SET.length; i++) {
        setItem = RECIPE_SET[i]
        setItem += totalOffset
        recipeSet.push(setItem)
    }

    if (recipeOffset == undefined || recipeOffset == null) {
        recipeOffset = 0
    }

    if (ignoreLastRows == undefined || ignoreLastRows == null) {
        ignoreLastRows = true
    }

    inputInventorySize = (ignoreLastRows ? (inputInventorySize) : (inputInventorySize - 24))

    for (let i = 0; i < inputInventorySize; i++) {
        if (recipeSet.includes(i)) {
            item = inputInventory.get(i)
            itemArray.push(item + "")
        }
    }

    return itemArray
}



/**
 * Generates a map for recipes
 * @param {String[]} inputArray Array of ingredients
 * @returns a <k, v> map where key = letter, value = item
 */
function genItemMap(inputArray) {
    let itemMap = new Map();
    let alphaOffset = 0;

    for (let i = 0; i < inputArray.length; i++) {
        crrItem = inputArray[i]

        for (let j = 0; j < inputArray.length; j++) {
            innerCrrItem = inputArray[j]
            if (itemMap.has(getKeyByValue(itemMap, crrItem))) {
                key = getKeyByValue(itemMap, crrItem)
            } else {
                key = ALPHABET[0 + alphaOffset]
                alphaOffset++
            }
            itemMap.set(key, crrItem)
        }

    }
    return itemMap
}


/**
 * 
 * @param {Map} inputMap The input map from genItemMap @see genItemMap
 * @param {String[]} inputArray The array of items from the server.
 * @returns a legend-matrix for use in the final string
 */
function genItemMatrix(inputMap, inputArray) {
    let matrix = ""
    counter = 0;
    for (let i = 0; i < inputArray.length; i++) {
        item = inputArray[i]
        let key;

        key = getKeyByValue(inputMap, item)
        comma = ""
        keyAdd = "";

        if ((counter == 2) || (counter == 5)) {
            comma = ",\n"

        }

        switch (counter % 3) {
            case 0:
                keyAdd = `'${key}`
                break;
            case 1:
                keyAdd = `${key}`
                break;
            case 2:
                keyAdd = `${key}'${comma}`
                break;

        }
        counter++

        matrix += keyAdd



    }
    return matrix
}

/**
 * Get the key for a value in the map
 * @param {Map} map The map to search in
 * @param {String} searchValue The value to search for
 * @returns the key of the map
 */
function getKeyByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
        if (value === searchValue)
            return key;
    }
}