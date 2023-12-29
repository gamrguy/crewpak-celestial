// priority: 0

ServerEvents.recipes(event => {
	event.remove('inventorypets:end_portal_pet')
	event.remove('inventorypets:nether_portal_pet')

	event.remove('inventorypets:nugget_emerald')
	event.remove('inventorypets:nugget_emerald_alt')
	event.remove('inventorypets:nugget_ender')
	event.remove('inventorypets:nugget_ender_alt')
	event.remove('inventorypets:nugget_coal')
	event.remove('inventorypets:nugget_coal_alt')
	event.remove('inventorypets:nugget_obsidian_alt')
	event.remove('inventorypets:nugget_diamond')
	event.remove('inventorypets:nugget_diamond_alt')

	event.remove('inventorypets:coal')

	event.replaceInput(
        { input: 'inventorypets:nugget_coal' }, 
        'inventorypets:nugget_coal',
        '#inventorypets:coal_nugget'
    )
	event.replaceInput(
        { input: 'inventorypets:nugget_ender' }, 
        'inventorypets:nugget_ender',
        '#inventorypets:ender_nugget'
    )
	event.replaceInput(
        { input: 'inventorypets:nugget_emerald' }, 
        'inventorypets:nugget_emerald',
        '#inventorypets:emerald_nugget'
    )
	event.replaceInput(
        { input: 'inventorypets:nugget_diamond' }, 
        'inventorypets:nugget_diamond',
        '#inventorypets:diamond_nugget'
    )
	event.replaceInput(
		{ input: '#inventorypets:coal'},
		'#inventorypets:coal',
		'#minecraft:coals'
	)
})

ServerEvents.tags('item', event => {
	event.add('inventorypets:coal_nugget', 'pickletweaks:coal_piece')
	event.add('inventorypets:coal_nugget', 'pickletweaks:charcoal_piece')
	event.add('inventorypets:ender_nugget', 'forbidden_arcanus:ender_pearl_fragment')
	event.add('inventorypets:emerald_nugget', 'silentgear:emerald_shard')
	event.add('inventorypets:diamond_nugget', 'silentgear:diamond_shard')
})