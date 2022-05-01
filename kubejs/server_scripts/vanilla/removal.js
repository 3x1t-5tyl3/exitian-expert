// priority: 1
var filename = "vanilla/removal.js"

console.info("Starting " + filename)

onEvent("recipes", event => {
    event.forEachRecipe({ output: "#minecraft:planks", type: "minecraft:crafting_shapeless", input: "#minecraft:logs" }, recipe => {
        event.remove({ id: recipe.getId() });
    });
})

console.info("Finished " + filename)


let MOD = (domain, id, x) => (x ? "${x}x" : "") + (id.startsWith("#") ? "#" : "") + domain + ":" + id.replace("#", "")
let C = (id, x) => MOD("create", id, x)
let M = (id, x) => MOD("minecraft", id, x)
let K = (id, x) => MOD("kubejs", id, x)
let F = (id, x) => MOD("forge", id, x)

let donut = (event, input, output) => {
    return event.shaped(output, [
        "SSS",
        "S S",
        "SSS"
    ], {
        S: input
    })
}

let surround = (event, centre, outside, output) => {
    return event.shaped(output, [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: outside,
        B: centre
    })
}

let stick = (event, input, output) => {
    return event.shaped(output, [
        "A",
        "A"
    ], {
        A: input
    })
}

let remove = (event, item) => { event.remove({ output: item }) }