// priority: 0
var filename = "unification.js"

console.info("Starting " + filename)



onEvent("recipes", event => {

    allIngots.forEach((item) => {
        event
            .shapeless(item.block_Planks, [item.block_Log])
            .id(item.rec_ID + "/shapeless")

    })

    event.replaceInput({}, "#forge:sawdust", "mekanism:sawdust")
    event.replaceOutput({}, "#forge:sawdust", "mekanism:sawdust")





})



/* onEvent("recipes", event => {
    event.remove({id: 'immersiveengineering:crafting/cokebrick'})
    event.remove({id: 'immersiveengineering:crafting/blastbrick'})
    event.remove({id: 'immersiveengineering:crafting/blastbrick_reinforced'})
    event.remove({id: 'immersiveengineering:alloysmelter/brass'})
    event.shaped('immersiveengineering:blastbrick_reinforced', [
        ' C ',
        'CBC',
        ' C '
      ], {
        C: 'immersiveengineering:ingot_steel',
        B: 'immersiveengineering:blastbrick'
    })
    event.shaped('3x immersiveengineering:cokebrick', [
        'SAS',
        'ABA',
        'SAS'
      ], {
        S: 'minecraft:clay',
        A: 'minecraft:bricks',
        B: 'immersiveengineering:ingot_steel'
      })
    event.shaped('3x immersiveengineering:blastbrick', [
        'SAS',
        'ABA',
        'SAS'
      ], {
        S: 'minecraft:nether_bricks',
        A: 'minecraft:bricks',
        B: 'immersiveengineering:ingot_steel'
      })
}) */

console.info("Finished " + filename)