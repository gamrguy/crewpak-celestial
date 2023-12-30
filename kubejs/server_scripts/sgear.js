// priority: 0

ServerEvents.tags('item', event => {
    event.add('farmersdelight:tools/knives', 'silentgear:knife')
    event.add('minecraft:coals', 'silentgear:netherwood_charcoal')
})

ServerEvents.recipes(event => {
    function salvage(input, outputs) {
        event.custom({
            type: 'silentgear:salvaging',
            ingredient: {
                item: input
            },
            results: outputs
        })
    }

    function gen_salvage_armor(modid, class_name, material) {
        salvage(`${modid}:${class_name}_helmet`, [{item: material, count: 5}])
        salvage(`${modid}:${class_name}_chestplate`, [{item: material, count: 8}])
        salvage(`${modid}:${class_name}_leggings`, [{item: material, count: 7}])
        salvage(`${modid}:${class_name}_boots`, [{item: material, count: 4}])
    }

    function gen_salvage_tools(modid, class_name, material, stick) {
        if(!stick) {
            stick = 'minecraft:stick'
        }

        let pickaxe = 'pickaxe'
        if(class_name === 'manasteel') {
            pickaxe = 'pick'
        }

        salvage(`${modid}:${class_name}_${pickaxe}`, [{item: material, count: 3}, {item: stick, count: 2}])
        salvage(`${modid}:${class_name}_axe`, [{item: material, count: 3}, {item: stick, count: 2}])
        salvage(`${modid}:${class_name}_shovel`, [{item: material, count: 1}, {item: stick, count: 2}])
        salvage(`${modid}:${class_name}_hoe`, [{item: material, count: 2}, {item: stick, count: 2}])
        salvage(`${modid}:${class_name}_sword`, [{item: material, count: 2}, {item: stick, count: 1}])
    }

    function gen_salvage(modid, class_name, material, stick) {
        gen_salvage_armor(modid, class_name, material)
        gen_salvage_tools(modid, class_name, material, stick)
    }

    gen_salvage('mekanismtools', 'bronze', 'mekanism:ingot_bronze')
    gen_salvage('mekanismtools', 'lapis_lazuli', 'minecraft:lapis_lazuli')
    gen_salvage('mekanismtools', 'osmium', 'mekanism:ingot_osmium')
    gen_salvage('mekanismtools', 'refined_obsidian', 'mekanism:ingot_refined_obsidian')
    gen_salvage('mekanismtools', 'refined_glowstone', 'mekanism:ingot_refined_glowstone')
    gen_salvage('mekanismtools', 'steel', 'mekanism:ingot_steel')

    gen_salvage('botania', 'manasteel', 'botania:manasteel_ingot', 'botania:livingwood_twig')
    gen_salvage('botania', 'elementium', 'botania:elementium_ingot', 'botania:dreamwood_twig')
    // gen_salvage_tools('botania', 'livingwood', 'botania:livingwood', 'botania:livingwood_twig')
    // gen_salvage_tools('botania', 'livingwood', 'botania:livingrock', 'botania:livingwood_twig')
    gen_salvage_armor('botania', 'manaweave', 'botania:manaweave_cloth')

    gen_salvage('forbidden_arcanus', 'deorum', 'forbidden_arcanus:deorum_ingot')

    gen_salvage('pickletweaks', 'flint', 'minecraft:flint')
    gen_salvage('pickletweaks', 'emerald', 'minecraft:emerald')

    gen_salvage('alloyed', 'steel', 'mekanism:ingot_steel')

    gen_salvage_armor('minecraft', 'chainmail', 'byg:chain_plating')
})