// priority: 0

ServerEvents.recipes(event => {
    function orechid(input, output, weight) {
        event.custom({
            type: 'botania:orechid',
            input: {
                type: 'block',
                block: input
            },
            output: {
                type: 'block',
                block: output
            },
            weight: weight
        })
    }

    // orechid
    orechid('minecraft:stone', 'create:zinc_ore', 7000)
    orechid('minecraft:deepslate', 'create:deepslate_zinc_ore', 75)

    orechid('minecraft:stone', 'mekanism:tin_ore', 7000)
    orechid('minecraft:deepslate', 'mekanism:deepslate_tin_ore', 25)

    orechid('minecraft:stone', 'mekanism:lead_ore', 7000)
    orechid('minecraft:deepslate', 'mekanism:deepslate_lead_ore', 30)

    orechid('minecraft:stone', 'mekanism:osmium_ore', 7000)
    orechid('minecraft:deepslate', 'mekanism:deepslate_osmium_ore', 100)

    orechid('minecraft:stone', 'mekanism:uranium_ore', 883)
    orechid('minecraft:deepslate', 'mekanism:deepslate_uranium_ore', 125)

    orechid('minecraft:stone', 'mekanism:fluorite_ore', 883)
    orechid('minecraft:deepslate', 'mekanism:deepslate_fluorite_ore', 75)
})