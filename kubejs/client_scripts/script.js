// priority: 0

// Variables
let primaryMod

// Hide items
onEvent('jei.hide.items', event => {
	event.hide('minecraft:cobblestone')
})

// Adding information to items
onEvent('jei.information', event => {
	event.add('minecraft:cobblestone_slab', ['Line 1', 'Line 2'])
	event.add('minecraft:cobblestone', ['Line 4', 'Line 3'])
  })