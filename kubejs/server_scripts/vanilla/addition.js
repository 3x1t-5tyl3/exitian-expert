// priority: 0

modId = "Laniakea"

onEvent("recipes", event => {
    builtWoodTypes.forEach((item) => {
        event.shapeless(item.block_Planks, [item.block_Log]).id(item.rec_ID + "/shapeless")
    })
})
