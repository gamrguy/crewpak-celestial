// priority: 0

ServerEvents.tags('item', event => {
	event.add('forge:furnaces/stone', 'minecraft:furnace')

	event.add('forge:furnaces', 'quark:deepslate_furnace')
	event.add('forge:furnaces/stone', 'quark:deepslate_furnace')

	event.add('forge:furnaces', 'quark:blackstone_furnace')
	event.add('forge:furnaces/stone', 'quark:blackstone_furnace')

	event.add('forge:furnaces', 'nethersdelight:blackstone_furnace')
	event.add('forge:furnaces/stone', 'nethersdelight:blackstone_furnace')

	event.add('forge:blast_furnaces', 'minecraft:blast_furnace')
	event.add('forge:blast_furnaces', 'nethersdelight:blackstone_blast_furnace')

	event.add('forge:smokers', 'minecraft:smoker')
	event.add('forge:smokers', 'nethersdelight:nether_brick_smoker')
})

ServerEvents.recipes(event => {
	// remove redundant recipes
	event.remove('nethersdelight:blackstone_furnace')
	event.remove('quark:building/crafting/furnaces/deepslate_smoker')
	event.remove('quark:building/crafting/furnaces/blackstone_smoker')
	event.remove('quark:building/crafting/furnaces/deepslate_blast_furnace')
	event.remove('quark:building/crafting/furnaces/blackstone_blast_furnace')

	// fix recipes using nethersdelight blackstone furnace
	event.replaceInput(
		{ 'input': 'nethersdelight:blackstone_furnace' },
		'nethersdelight:blackstone_furnace',
		'quark:blackstone_furnace'
	)

	// fix recipes using vanilla furnace
	event.replaceInput(
		{ 'input': 'minecraft:furnace' },
		'minecraft:furnace',
		'#forge:furnaces/stone'
	)
	
	// fix blast furnaces and smokers
	event.replaceInput(
		{ 'input': 'minecraft:blast_furnace' },
		'minecraft:blast_furnace',
		'#forge:blast_furnaces'
	)
	event.replaceInput(
		{ 'input': 'minecraft:smoker' },
		'minecraft:smoker',
		'#forge:smokers'
	)

	// fix coal blocks
	event.replaceInput(
		{ 'id': 'minecraft:coal_block' },
		'#minecraft:coals',
		'minecraft:coal'
	)
	event.replaceInput(
		{ 'id': 'quark:building/crafting/compressed/charcoal_block' },
		'#minecraft:coals',
		'minecraft:charcoal'
	)
})