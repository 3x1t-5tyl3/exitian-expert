// priority: 0
var filename = "unification.js"

console.info("Starting " + filename)

onEvent("recipes", event => {
    event.replaceInput({}, "#forge:sawdust", "mekanism:sawdust")
    event.replaceOutput({}, "#forge:sawdust", "mekanism:sawdust")
})


console.info("Finished " + filename)