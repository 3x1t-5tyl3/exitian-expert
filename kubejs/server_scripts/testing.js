/* event.recipes.mekanismSawing('minecraft:redstone', 'minecraft:brick', item.of('minecraft:clay').chance(0.3)) */

// priority: 0
var filename = "vanilla/addition.js"

console.info("Starting TESTING")

onEvent("recipes", event => {
    event.remHideItem("", "minecraft:diamond")
})

console.info("Finished TESTING")