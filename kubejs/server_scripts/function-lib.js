
/**
 * Unifies recipe in and outputs with a singular item to make it less annoying.
 * @param {event} event Pass the recipe event
 * @param {string} inputItem Item to replace, accepts tags as-well
 * @param {string} unifyItem item to unify towards.
 */
function rplinout(event, inputItem, unifyItem) {
    event.replaceInput({}, inputItem, unifyItem)
    event.replaceOutput({}, inputItem, unifyItem)
}