// priority: 0

ServerEvents.tags('block', event => {
    // blaze burner as cauldron heat source
    event.add('hexerei:heat_sources', 'create:blaze_burner')
})