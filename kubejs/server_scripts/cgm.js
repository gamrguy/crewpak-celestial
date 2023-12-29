// priority: 0

ServerEvents.recipes(event => {
    const gun_recipes = [
        'cgm:advanced_bullet',
        'cgm:assault_rifle',
        'cgm:basic_bullet',
        'cgm:bazooka',
        'cgm:grenade',
        'cgm:grenade_launcher',
        'cgm:heavy_rifle',
        'cgm:machine_pistol',
        'cgm:mini_gun',
        'cgm:missile',
        'cgm:pistol',
        'cgm:rifle',
        'cgm:shell',
        'cgm:shotgun',
        'cgm:stun_grenade'
    ]
    
    for(let recipe of gun_recipes) {
        event.remove(recipe)
    }
})