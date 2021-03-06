// priority: 0
onEvent('jei.hide.items', event => {
    // Hide items in JEI here
    // event.hide('minecraft:cobblestone')
})


var changingColor = 0
var hue = 165
var shiftToolTip = true
enableItemToolTipAnim = false


var HSLtoRGB = (h, s, l) => {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return (Math.round(255 * f(0)) << 16) + (Math.round(255 * f(8)) << 8) + (Math.round(255 * f(4)));
};

function changeColorRBW() {
    if (true || shiftToolTip) {
        hue += 5
        if (hue > 360) {
            hue = 0
        }
        changingColor = HSLtoRGB(hue, 100, 66)
    }
}

onEvent('item.tooltip', event => {
    event.addAdvanced("minecraft:stick", (item, advanced, text) => {
        changeColorRBW()
        text.set(0, [Text.of("Stick").color(changingColor)])
        if (event.isShift()) {
            shiftToolTip = true
        } else {
            shiftToolTip = false
        }
        if (event.isAlt()) {
            altTooLTip = true
        } else {
            altToolTip = false
        }
        if (event.isCtrl()) {
            ctrlTooLTip = true
        } else {
            ctrlToolTip = false
        }
    })
})