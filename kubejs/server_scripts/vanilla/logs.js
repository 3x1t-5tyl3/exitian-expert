// priority: 0
var filename = "vanilla/logs.js"
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info("Starting "+filename)

/// remove vanilla plank recipes
onEvent('recipes', event => {
    event.forEachRecipe({output: "#minecraft:planks", type: "minecraft:crafting_shapeless"}, recipe => {
		event.remove({id: recipe.getId()});
      })
})
/// add back with less outputs
onEvent("recipes", event => {
	const allwoods = new map(builtWoodTypes)
	for (event.forEach(event => {
		event.builtWoodTypes();
	})
})

console.info("Finished "+filename)