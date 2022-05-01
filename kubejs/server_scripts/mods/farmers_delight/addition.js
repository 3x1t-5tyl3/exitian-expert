// priority: 0
var filename = "mods/create/addition.js"

console.info("Starting " + filename)




onEvent("recipes", event => {
    event.recipes.createSandpaperPolishing("diamond", "emerald")
})

console.info("Finished " + filename)