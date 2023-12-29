// priority: 0

ServerEvents.recipes(event => {
    event.shaped(
        'biggerreactors:ludicrite_block',
        [
            'BRB',
            'E E',
            'BRB'
        ],
        {
            'B': 'biggerreactors:blutonium_ingot',
            'R': 'minecraft:blaze_rod',
            'E': '#forge:storage_blocks/enderium'
        }
    )
})