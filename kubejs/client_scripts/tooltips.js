// priority: 0
var filename = "tooltips.js"
console.info("Starting "+filename)

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

onEvent('item.tooltip', e => {
    e.addAdvanced("minecraft:diamond", (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of("Hold: "), Text.of("SHIFT").color(0xff9ec1), Text.of(" for more info.")])
       	}
		if (e.isShift()) {
			text.add(1, [Text.of("└ Hold: "), Text.of("SHIFT").color(0xff9ec1), Text.of(" for more info.")])
			text.add(2, Text.of(" └ Item 1"))
			text.add(3, Text.of("  └ Item 2"))
			text.add(4, Text.of("   └ Item 3"))
		}
    })
})
console.info("Finished "+filename)