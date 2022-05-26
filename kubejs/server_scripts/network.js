/* 

Yea this doesn't work... the data get's sent but barely received. It's problematic and I don't know enough about networking to care.

*/

/* Send netowrking packets to receive an inventory.
const RECIPE_SET = [0, 1, 2, 12, 13, 14, 24, 25, 26, 36, 37] */
/* onEvent('block.left_click', event => {
    if (event.server) {
        inventory = event.block.getInventory("down")
        size = inventory.size
        event.player.sendData("receive_data", {b: true})
        for (let i = 0; i < 4; i++) {
            array = getIngredients(inventory, size, i)
            event.player.sendData(`block_inventory_${i}`, { ingr: array })
        }
    }
}) */

/** 
 * Returns an array for a recipe 
 * @param {object} inputInventory The inventory object
 * @param {number} inputInventorySize Inventory size
 * @param {number} [recipeOffset=0] Recipe offset
 * @param {boolean} [ignoreLastRows=true] If it should ignore the last 2 rows of the chest. 
 * @returns {String[]} Returns the array of ingredients and the recipe output.
 */
/* function getIngredients(inputInventory, inputInventorySize, recipeOffset, ignoreLastRows) {
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
} */