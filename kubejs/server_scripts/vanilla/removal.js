// priority: 1
var filename = "vanilla/removal.js"

console.info("Starting " + filename)

onEvent("recipes", event => {
    event.forEachRecipe({ output: "#minecraft:planks", type: "minecraft:crafting_shapeless", input: "#minecraft:logs" }, recipe => {
        event.remove({ id: recipe.getId() });
    });
})

console.info("Finished " + filename)