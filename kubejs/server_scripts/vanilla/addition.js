// priority: 0
var filename = "vanilla/addition.js"

console.info("Starting " + filename)

onEvent("recipes", event => {
    builtWoodTypes.forEach((item) => {
        event.shapeless(item.block_Planks, [item.block_Log]).id(item.rec_ID + "/shapeless")
    })
})

console.info("Finished " + filename)