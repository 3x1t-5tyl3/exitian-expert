// priority: 1

onEvent("recipes", event => {
    event.forEachRecipe({ output: "#minecraft:planks", type: "minecraft:crafting_shapeless", input: "#minecraft:logs" }, recipe => {
        event.remove({ id: recipe.getId() });
    });
})