// priority: 1

onEvent("recipes", event => {
    event.remove({ type: "farmersdelight:cutting" });
})