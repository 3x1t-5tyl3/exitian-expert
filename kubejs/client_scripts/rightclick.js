/* const modId = "laniakeaex"

onEvent("block.left_click", event => {
    heldItem = event.player.mainHandItem
    heldItemName = heldItem.name

    recArr = [];
    recArrLg = recArr.length;
    arrayleg = 0;

    giveWoodSword = `/give 3x1t_5tyl3 minecraft:wooden_sword{Damage:0,display:{Name:'[{"text":"recipe"}]'}}`

    isRecipeMode = (event.hasGameStage("recipemode") && event.player.name == "3x1t_5tyl3")





    // get the item and size
    invObj = event.block.getInventory("down");
    invSize = invObj.getSize();

    if (isRecipeMode) {



        switch (heldItemName) {
            default:
                event.player.tell("Not a proper recipe type.")
            break;
            case "shaped":
                event.player.tell("shaped")
                break;
            case "shapeless":
                event.player.tell("shapeless")
                break;  
        }
    }
    
    // loop through it and slap it in the array for easy access
    for (let i = 0; i < invSize; i++) {
        item = invObj.get(i)
        stringItem = item+""
        recArr.push(stringItem)
    }



    // Loop through the given array and 
    for (let i = 0; i < invSize; i++) {
        item = invObj.get(i)
        stringItem = item+""
        if (stringItem != "Item.empty") {
            arrayleg++
        }
    }

    for (let i = 0; i < invSize; i++) {
        item = invObj.get(i)
        stringItem = item+""
        recArr.push(stringItem)
    }

    if (event.player.crouching) {
        event.player.tell([
            Text.of("Click ").color(0xafafaf),
            Text.of("here").color(0xff9ec1).click(`copy:${template}`).hover(template),
            Text.of(" to copy the recipe").color(0xafafaf)
        ]);
    }
})


function shapedRecipe(array, outputItem) {
    // yeah I hate this too; don't @ me
    template = `event.shaped(` + outputItem + `,
    ['ABC',
     'DEF',
     'GHI'],
    {
        A: `+ array[0] +`,
        B: `+ array[1] +`,
        C: `+ array[2] +`,
        D: `+ array[3] +`,
        E: `+ array[4] +`,
        F: `+ array[5] +`,
        G: `+ array[6] +`,
        H: `+ array[7] +`,
        I: `+ array[8] +`
    }).id('`+modId+`:REPLACEME')`

    return template
}

function shapelessRecipe(array, itemInput) {
    // yeah I hate this too; don't @ me
    template = `event.shapeless('${}, ['minecraft:stone', '#forge:dusts/glowstone'])`

    template = `event.shaped(${itemInput},
    ['ABC',
     'DEF',
     'GHI'],
    {
        A: ${array[0]},
        B: ${array[1]},
        C: ${array[2]},
        D: ${array[3]},
        E: ${array[4]},
        F: ${array[5]},
        G: ${array[6]},
        H: ${array[7]},
        I: ${array[8]}
    }).id('${modId}:REPLACEME')`

    return template
}

 */