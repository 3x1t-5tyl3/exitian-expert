// priority: 0
var filename = "constants/wood.js"

console.info("Starting " + filename)

/* 

WOOD TYPES BELOW

*/

let builtWoodTypes = [];

const woodTypes = [
    'allyoucaneat:hazel',
    /// 'aquaculture:driftwood', not sure about this one, might do it manually.
    /// 'ars_nouveau:archwood', adding this manually as it's not worth coding an exception for.
    'botania:dreamwood',
    'botania:livingwood',
    'byg:aspen',
    'byg:baobab',
    'byg:blue_enchanted',
    'byg:bulbis',
    'byg:cherry',
    'byg:cika',
    'byg:cypress',
    'byg:ebony',
    /// 'byg:embur_pedu', again, not worth the exception for.
    'byg:ether',
    'byg:fir',
    'byg:green_enchanted',
    'byg:holly',
    'byg:imparius',
    'byg:jacaranda',
    'byg:lament',
    'byg:mahogany',
    'byg:mangrove',
    'byg:maple',
    'byg:nightshade',
    'byg:palm',
    /// 'byg:palo_verde', again, not worth the exception for.
    'byg:pine',
    'byg:rainbow_eucalyptus',
    'byg:redwood',
    'byg:skyris',
    'byg:sythian',
    'byg:willow',
    'byg:witch_hazel',
    'byg:zelkova',
    'forbidden_arcanus:cherrywood',
    'forbidden_arcanus:edelwood',
    'forbidden_arcanus:fungyss',
    'forbidden_arcanus:mysterywood',
    /// 'forbidden_arcanus:thin_cherrywood', this one is crafted thus not very useful, keeping it in to not forgett
    'minecraft:acacia',
    'minecraft:birch',
    'minecraft:crimson',
    'minecraft:dark_oak',
    'minecraft:jungle',
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:warped',
    'naturesaura:ancient',
    'quark:azalea',
    'quark:blossom',
    'silentgear:netherwood'
]

woodTypes.forEach((wood_type) => {
    var variant_Split = wood_type.split(":")
    var w_Suffix = ""
    var mod_id = variant_Split[0]
    var w_Type = variant_Split[1]

    switch (w_Type) {
        default: w_Suffix = "_log";
        break;
        case "imparius":
                w_Suffix = "_stem";
            break;
        case "sythian":
                w_Suffix = "_stem";
            break;
        case "fungyss":
                w_Suffix = "_stem";
            break;
        case "crimson":
                w_Suffix = "_stem";
            break;
        case "warped":
                w_Suffix = "_stem";
            break;
        case "bulbis":
                w_Suffix = "_stem";
    }


    block_Log = mod_id + ":" + w_Type + w_Suffix;
    block_Planks = mod_id + ":" + w_Type + "_planks";
    rec_ID = "exitianex:log_to_planks/" + w_Type;

    var woodType = {
        mod_id: mod_id,
        block_Log: block_Log,
        block_Planks: block_Planks,
        rec_ID: rec_ID
    };
    builtWoodTypes.push(woodType)
})

console.info("Finished " + filename)