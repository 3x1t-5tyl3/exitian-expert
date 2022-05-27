/**
 * How to use it:
 * be in creative, with a wooden sword and left click a diamond chest. I only tested it with that one. That's what my pack uses. Don't @ me about it.
 * The recipe has to be laid out like this in the chest
 * This requies a 12 x 4 (at the minimum) chest. Any other size will NOT work.
 *  
 * "xxx""xxx""xxx""xxx"
 * "xxx""xxx""xxx""xxx"
 * "xxx""xxx""xxx""xxx"
 * "yz0""yz0""yz0""yz0"
 * 
 * x = any input item (incl nbt)
 * y = if there's an item in that spot the recipe is shapeless else it's shaped
 * 0 = nothing youc an ignore this slot.
 * 
 * you'll get 4 outputs in your chat, top to bottom = left to right in the chest.
 * If you have questions ask on my discord: https://mc.exitian.ch/discord or on my website top left corner https://exitian.ch
 * 
 * This thing also breaks at times and spits out 8 instead of 4 lines.. just read the code if you need help.
 */


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