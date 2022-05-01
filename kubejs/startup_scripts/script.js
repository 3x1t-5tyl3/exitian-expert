// priority: 0

console.info('Registering items..')

onEvent('item.registry', event => {
    // Register new items here
    event.create('raw_iridium').displayName('Raw Iridium Ore')
})

console.info('Done registering: Items')
console.info('Registering blocks..')

onEvent('block.registry', event => {
    // Register new blocks here
    event.create('iridium_ore').material('stone').hardness(3.0).displayName('Iridium Ore')
})
console.info('Done registering: Blocks')