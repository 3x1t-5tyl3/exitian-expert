global.hiddenitems = [];

global.function remHideItem(inputItem) {
    event.remove(inputItem.toString())
    global.hiddenitems.push(inputItem)
}