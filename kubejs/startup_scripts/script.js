// priority: 0

console.info('Registering items..')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

console.info('Done registering: Items')
console.info('Registering blocks..')

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
console.info('Done registering: Blocks')