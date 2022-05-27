let fireonce = true;

onEvent("block.left_click", event => {

    let itemArray = [];
    let invObj = event.block.getInventory("down")
    let invSize = invObj.size;
    let currenttime = event.level.time

    // this script breaks sometimes, if shit breaks (ergo it sends the output 8 instead of 4 times) set the enabler to true. You can blame Mojang for this one.
    enabler = false
    if (fireonce && enabler) {
        fireonce = false
    } else {
        fireonce = true
    }


    if ((event.player.isCreativeMode) && (invObj != null || invObj != undefined) && (event.player.mainHandItem == "minecraft:wooden_sword") && fireonce) {
        for (let k = 0; k < 4; k++) {
            outputArray = getIngredients(invObj, invSize, k)

            itemArray = outputArray[0]
            isShapeless = outputArray[1]
            outputItem = outputArray[2]

            itemMap = genItemMap(itemArray)
            itemMatrix = genItemMatrix(itemMap, itemArray)
            itemLegend = recipeLegend(itemMap)

            if (!isShapeless) {

                typeString = "Shapeless"
                itemArray.sort()
                let newItemArray = [];
                for (let i = 0; i < 9; i++) {
                    if (itemArray[i] != "Item.empty") {
                        newItemArray.push(itemArray[i])
                    }
                }
                copytext = genShapelessRecipeString(newItemArray, outputItem)
                chatRecipe(event, typeString, copytext)
            } else if (isShapeless) {
                typeString = "Shaped"
                copytext = genShapedRecipeString(itemMatrix, itemLegend, outputItem)
                chatRecipe(event, typeString, copytext)

            }
        }
    }
})