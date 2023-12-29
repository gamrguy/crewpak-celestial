// priority: 0

ServerEvents.recipes(event => {
	event.replaceInput(
		{ id: 'createdeco:gold_hull'},
		'minecraft:gold_ingot',
		'#forge:plates/gold'
	)
	event.replaceInput(
		{ id: 'createdeco:zinc_hull'},
		'#forge:ingots/zinc',
		'#forge:plates/zinc'
	)
	event.replaceInput(
		{ id: 'createdeco:brass_hull'},
		'#forge:ingots/brass',
		'#forge:plates/brass'
	)
	event.replaceInput(
		{ id: 'createdeco:iron_hull'},
		'minecraft:iron_ingot',
		'#forge:plates/iron'
	)
	event.replaceInput(
		{ id: 'createdeco:netherite_hull'},
		'minecraft:netherite_ingot',
		'#forge:plates/netherite'
	)
	event.replaceInput(
		{ id: 'createdeco:copper_hull'},
		'minecraft:copper_ingot',
		'#forge:plates/copper'
	)
	event.replaceInput(
		{ id: 'createdeco:gold_hull'},
		'createdeco:cast_iron_ingot',
		'#forge:plates/cast_iron'
	)
})