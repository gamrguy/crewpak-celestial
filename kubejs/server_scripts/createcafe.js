// priority: 0

ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('createcafe:mint_syrup', 1000), ['pamhc2crops:spiceleafitem', Fluid.water(250), Fluid.of('createcafe:melted_sugar', 750)]).heated()
})