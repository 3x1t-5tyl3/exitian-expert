// priority: 1
var filename = "farmers_delight/removal.js"

console.info("Starting "+filename)

onEvent("recipes", event => {
	event.remove({type: "farmersdelight:cutting"});
})

console.info("Finished "+filename)