// priority: 0

ServerEvents.recipes(event => {
	event.remove({ output: 'immersive_aircraft:biplane' })
	event.remove({ output: 'immersive_aircraft:airship' })
	event.remove({ output: 'immersive_aircraft:gyrodyne' })
	event.remove({ output: 'immersive_aircraft:propeller' })
	
	event.shaped(
		Item.of('immersive_aircraft:propeller', 1),
		[
			' A ',
			'ABA',
			' A '
		],
		{
			A: 'create:iron_sheet',
			B: 'create:propeller'
		}
	)
	
	event.recipes.createMechanicalCrafting(
		'immersive_aircraft:biplane',
		[ 
			"   AA   ",
			"   AA   ", 
			"A  ABB  ",
			"BBBBEDC ", 
			"A  ABB  ",
			"   AA   ", 
			"   AA   " 
		], 
		{
			A: "immersive_aircraft:sail",
			B: "immersive_aircraft:hull",
			C: "immersive_aircraft:propeller",
			D: "immersive_aircraft:engine",
			E: "#create:seats",
		}
	)
	event.recipes.createMechanicalCrafting(
		'immersive_aircraft:airship',
		[
			"AABBBB ",
			"ABC  CB",
			"AABBBB ",
			"  D  D ",
			" EFGHF ",
			"   FF  "
		],
		{
			A: "immersive_aircraft:sail",
			B: "#minecraft:wool",
			C: "mekanism:hydrogen_bucket",
			D: "minecraft:chain",
			E: "immersive_aircraft:propeller",
			F: "immersive_aircraft:hull",
			G: "immersive_aircraft:engine",
			H: "#create:seats",
		}
	)
	event.recipes.createMechanicalCrafting (
		'immersive_aircraft:gyrodyne',
		[
			" ABA ",
			"  C  ",
			"DEFGE",
			"  EE "
		],
		{
			A: "create:iron_sheet",
			B: "immersive_aircraft:propeller",
			C: "createaddition:iron_rod",
			D: "minecraft:grindstone",
			E: "immersive_aircraft:hull",
			F: "create:hand_crank",
			G: "#create:seats",
		}
	)
	// event.recipes.createMechanicalCrafting (
	// 	'cgm:mini_gun',
	// 	[
	// 		" A     ",
	// 		"BCDEEEE",
	// 		"BCDEEEE",
	// 		"BCFFFFF"
	//     ],
	// 	{
	// 		A: "minecraft:lever",
	// 		B: "create:brass_ingot",
	// 		C: "silentgear:azure_electrum_ingot",
	// 		D: "minecraft:chain",
	// 		E: "create:fluid_pipe",
	// 		F: "alltheores:enderium_ingot",
	// 	}
	// )
	// event.recipes.createMechanicalCrafting (
	// 	'cgm:rifle',
	// 	[
	// 		"B    ",
	// 		"BCEEE",
	// 		"FA   "
	//     ],
	// 	{
	// 		A: "minecraft:lever",
	// 		B: "create:brass_ingot",
	// 		C: "silentgear:azure_electrum_ingot",
	// 		E: "create:fluid_pipe",
	// 		F: "alltheores:enderium_ingot",
	// 	}
	// )
})