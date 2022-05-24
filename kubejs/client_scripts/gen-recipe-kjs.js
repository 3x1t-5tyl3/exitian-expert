/* 
*
*  Documented with JSDoc https://jsdoc.app/
*
*/

const MODID = "laniakeaex"
const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
const RECIPE_PLAYERS = ["3x1t_5tyl3", "dummy"]
const RECIPE_SET = [0, 1, 2, 12, 13, 14, 24, 25, 26]
const RECIPE_OUTPUTS = [45, 46, 47, 57, 58, 59, 70]
const DEF_COLOR = 0xffffff // white
const ACC_COLOR = 0xff9ec1 // pink
const RECIPE_TYPES = ["shaped", "shapeless"]
const LEN_RECIPE_TYPES = RECIPE_TYPES.length

onEvent("block.left_click", event => {

    let heldItem = event.player.mainHandItem
    let heldItemName = heldItem.name

    let invObj = event.block.getInventory("down")
    let invSize;

    let recipeArray = [];
    let invArr = [];

    canCreateRec = (event.player.isCreativeMode() && RECIPE_PLAYERS.includes(event.player.name + ""))

    if (invObj != null) {
        invSize = invObj.getSize();
    } else {
        invSize = 0
    }

    for (let k = 0; k < 7; k++) {
        getRecMatrix(event, invObj, invSize)
    }

    if (canCreateRec) {
        switch (heldItemName) {
            default:
                recipeType = undefined
                break;
            case "shaped":
                recipeType = "shaped"
                break;
            case "shapeless":
                recipeType = "shapeless"
                break;
        }
    }



    /*     for (let k = 0; k < 7; k++) {
            event.player.tell(getIngredients(invObj, invSize, k))
        } */

})