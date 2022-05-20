// Shelfed for now. I'll figure it out at some point

/* slot = ",Slot:"
slots = []

regex = /(?<={).*(?=})/g

function getItemOfSlot(s, n) {
    slot = s.indexOf(",Slot:", n)
    endIndex = s.indexOf("\"}")
    item = "t"
    return item
} */

onEvent("block.right_click", event => {

    recArr = [];


    invObj = event.block.getInventory("down");
    invSize = invObj.getSize();

    for (let i = 0; i < invSize; i++) {
        item = invObj.get(i)
        if (item == "Item.empty") {
            event.player.tell("empty, not parsing..")
        } else {
            event.player.tell(item)
        }
    }

    event.player.tell(recArr)

    if (item != null) {
        if (event.hand == MAIN_HAND) {
            switch (event.player.mainHandItem) {
                case "forbidden_arcanus:draco_arcanus_arrow":
                    event.player.tell("1")
                    break;
                case Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:harming"}'):
                    event.player.tell("2")
                    break;
                case Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:healing"}'):
                    event.player.tell("3")
                default:
                    break;
            }
        }
    }
})






/* 
container = event.level.getBlock(xyz)
inventory = container.inventory
 */