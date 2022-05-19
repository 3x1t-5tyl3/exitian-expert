onEvent("block.right_click", event => {

    item = event.block.entityData

    itemListStart = item.toString().indexOf(",Items:", 0) + 7
    itemListEnd = item.toString().indexOf(",LastRecipeId", itemListStart)

    craftingSet = item.toString().slice(itemListStart, itemListEnd)
    event.player.tell(craftingSet)


    if (item != null) {
        if (event.hand == MAIN_HAND) {
            switch (event.player.mainHandItem) {
                case "forbidden_arcanus:draco_arcanus_arrow":
                    
                    break;
                case Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:harming"}'):
                    
                    break;
                case Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:healing"}'):
                    
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