// priority: 0

/* 

Handled through "Laniakea" mod. I won't bother with global variables either. Seems like a waste of time to figure out.

*/

onEvent("item.registry", event => {
    // Register new items here
    // event.create("raw_iridium").displayName("Raw Iridium Ore")
})

onEvent("block.registry", event => {
    // Register new blocks here
    // event.create("iridium_ore").material("stone").hardness(3.0).displayName("Iridium Ore")
})