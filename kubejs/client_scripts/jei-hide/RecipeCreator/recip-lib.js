
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

/**
 * 
 * @param {String} event pass the event
 * @param {String} recipeType what type of recipe
 * @param {String} copytext the text that's copied
 * @param {Number} accColor accent color (optional)
 * @param {Number} defColor default text color (optional)
 */
function chatRecipe(event, recipeType, copytext, accColor, defColor) {

    if (accColor == undefined || accColor == null) {
        accColor = ACC_COLOR
    }

    if (defColor == undefined || defColor == null) {
        defColor = DEF_COLOR
    }

    event.player.tell([
        Text.of("Click ").color(defColor),
        Text.of("[HERE]").color(accColor).click("copy:" + copytext).hover(recipeType),
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
    let itemArray = [];
    let offsetMp = 3
    let totalOffset = offsetMp * recipeOffset
    let recipeSet = [];
    let recipeTypeItem, outCount, outputItem, bool

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
            switch (i) {
                default:
                    item = inputInventory.get(i)
                    itemArray.push(item + "")
                    break;
                case (36 + totalOffset):
                    recipeTypeItem = inputInventory.get(i) + ""
                    break;
                case (37 + totalOffset):
                    outputItem = inputInventory.get(i)
                    break;
            }
        }
    }

    if (recipeTypeItem != "Item.empty" || recipeTypeItem == null || recipeTypeItem == undefined) {
        bool = false
    } else {
        bool = true
    }

    return [itemArray, bool, outputItem]
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
 * Generates a 3x3 matrix of a single letter
 * @param {Map} inputMap The input map from genItemMap @see genItemMap
 * @param {String[]} inputArray The array of items from the server.
 * @returns a legend-matrix for use in the final string
 */
function genItemMatrix(inputMap, inputArray) {
    let matrix = "";
    let counter = 0;
    for (let i = 0; i < inputArray.length; i++) {
        item = inputArray[i]
        let key;

        key = getKeyByValue(inputMap, item)
        comma = "";
        keyAdd = "";

        if ((counter == 2) || (counter == 5)) {
            comma = `,\n`
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
 * Creates a legend for the shaped recipe.
 * @param {Map} map input map
 * @returns {String[]} array 
 */
function recipeLegend(map) {
    let array = new Array
    for (let [k, v] of map.entries()) {
        crrLegen = `${k}: ${v}`
        array.push(crrLegen)
    }
    return array
}



/**
 * @param {String} matrix The matrix input
 * @param {String} legend The key/value pair legend
 * @param {String} output output item
 * @returns A copyable string to slap back into KJS
 */
function genShapedRecipeString(matrix, legend, output) {
    return `event.shaped(${output}, [
        ${matrix}
      ], {
        ${legend}
      })`
}

/**
 * @param {String[]} array Array of items
 * @param {String} output output item
 * @returns A copyable string to slap back into KJS
 */
function genShapelessRecipeString(array, output) {
    template = `event.shapeless(${output}, [${array}])`
    return template.replace(/\n/g, "")
}

