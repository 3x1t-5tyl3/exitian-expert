const MODID = "laniakeaex"
const ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
const RECIPE_SET = [0, 1, 2, 12, 13, 14, 24, 25, 26, 36, 37]
const EDITOR = "3x1t_5tyl3"
const DEF_COLOR = 0xffffff // white
const ACC_COLOR = 0xff9ec1 // pink
const DEBUG = true; // debug cause I'm lazy.
const RECIPE_CONTAINER = "ironchests:diamond_chest" // any container which is 12 wide and at-least 4 high should work.



onEvent("block.left_click", event => {

    let itemArray = [];
    let invObj = event.block.getInventory("down")
    let invSize;
    let valid;


    if (event.player.name + "" == EDITOR) {
        if (invObj != null || invObj != undefined) {
            invSize = invObj.size;
            valid = true
        } else if (DEBUG) {
            event.player.tell("Not a valid container.")
            valid = false
        }
        if (DEBUG) { event.player.tell(Text.of("Don't forgett to re-open the chest.").darkGray()) }
        if (valid) {
            for (let k = 0; k < 4; k++) {
                if (DEBUG) {
                    event.player.tell(Text.of("<------new-recipe------>").color(0xff9ec1))
                }


                itemArray = getIngredients(invObj, invSize, k)
                outputItem = itemArray.pop()
                recipeTypeItem = itemArray.pop()

                let isShapeless = false;
                if (recipeTypeItem != "Item.empty") {
                    isShapeless = true
                }

                itemMap = genItemMap(itemArray)
                itemMatrix = genItemMatrix(itemMap, itemArray)
                if (DEBUG) {
                    event.player.tell(`Shapeless: ${isShapeless}`)
                    event.player.tell(itemMatrix)

                    for (let [k, v] of itemMap.entries()) {
                        event.player.tell(`${k} = ${v}`)
                    }
                }
                /* template = `event.shaped('3x minecraft:stone',
                [${legendMatrix},
                {
                    ${legendList}
                })` */
            }
        }
    }
})