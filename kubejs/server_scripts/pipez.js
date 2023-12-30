// priority: 0

ServerEvents.recipes(event => {
	event.shaped('pipez:infinity_upgrade',
		[
			'IRI',
			'SUS',
			'IXI'
		], {
			U: 'pipez:ultimate_upgrade',
			I: '#forge:storage_blocks/iridium',
			S: 'mekanism:logistical_sorter',
			R: 'mekanism:qio_importer',
			X: 'mekanism:qio_exporter'
		}
	)
})