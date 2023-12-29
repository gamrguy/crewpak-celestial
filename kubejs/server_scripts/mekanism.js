// priority: 0

ServerEvents.recipes(event => {
    event.custom({
        type: 'mekanism:oxidizing',
        'input': {
            'ingredient': {
                'tag': 'forge:sand/moon_sand'
            }
        },
        'output': {
            'amount': 100,
            'gas': 'mekanismgenerators:tritium'
        }
    })
})