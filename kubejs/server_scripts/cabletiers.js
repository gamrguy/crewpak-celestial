// priority: 0

ServerEvents.recipes(event => {
	// Remove all Cable Tiers Creative tier recipes
	// These all use a Dragon Head in the center
	event.remove({
		mod: 'cabletiers',
		input: 'minecraft:dragon_head'
	})
})