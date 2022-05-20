// priority: 0

onEvent("recipes", event => {
    builtWoodTypes.forEach((item) => {
        event.custom({
                "type": "farmersdelight:cutting",
                "ingredients": [{
                    "item": item.block_Log
                }],
                "tool": {
                    "tag": "forge:tools/axe"
                },
                "result": [{
                        "item": item.block_Planks,
                        "count": 3
                    },
                    {
                        "item": item.block_Planks,
                        "count": 1,
                        "chance": 0.66
                    },
                    {
                        "item": "mekanism:sawdust",
                        "count": 1,
                        "chance": 0.66
                    },
                    {
                        "item": "mekanism:sawdust",
                        "count": 1,
                        "chance": 0.33
                    }
                ],
                "sound": "minecraft:item.axe.strip"
            })
            .id(item.rec_ID + "/cutting_board")
    })
})