// priority: 0

ServerEvents.recipes(event => {
	// Removed to prevent crash when pressing 'U' on Ender Storage chests and tanks
	// https://github.com/TheCBProject/EnderStorage/issues/213
	event.remove({ type: 'enderstorage:recolour_recipe' })

	// TODO: Implement alternative, non-crashy recipe?
})