// priority: 0
var filename = "constants/vanilla.js"

console.info("Starting "+filename)

let builtWoodTypes = [];

const woodTypes = [
    'allyoucaneat:hazel',
/// 'aquaculture:driftwood',
    'ars_nouveau:red_archwood',
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
    'byg:embur_pedu',
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
    'byg:palo_verde',
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
    'forbidden_arcanus:thin_cherrywood',
    'minecraft:acacia',
    'minecraft:birch',
    'minecraft:crimson',
    'minecraft:dark_oak',
    'minecraft:jungle',
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:stripped_acacia',
    'minecraft:stripped_birch',
    'minecraft:stripped_crimson',
    'minecraft:stripped_dark_oak',
    'minecraft:stripped_jungle',
    'minecraft:stripped_oak',
    'minecraft:stripped_spruce',
    'minecraft:stripped_warped',
    'minecraft:warped',
    'naturesaura:ancient',
    'quark:azalea',
    'quark:blossom',
    'silentgear:netherwood'
]

/* const woodPlanks = [
    'allyoucaneat:hazel_planks',
    'ars_nouveau:archwood_planks',
    'byg:aspen_planks',
    'byg:baobab_planks',
    'byg:blue_enchanted_planks',
    'byg:bulbis_planks',
    'byg:cherry_planks',
    'byg:cika_planks',
    'byg:cypress_planks',
    'byg:ebony_planks',
    'byg:embur_planks',
    'byg:ether_planks',
    'byg:fir_planks',
    'byg:green_enchanted_planks',
    'byg:holly_planks',
    'byg:imparius_planks',
    'byg:jacaranda_planks',
    'byg:lament_planks',
    'byg:mahogany_planks',
    'byg:mangrove_planks',
    'byg:maple_planks',
    'byg:nightshade_planks',
    'byg:palm_planks',
    'byg:pine_planks',
    'byg:rainbow_eucalyptus_planks',
    'byg:redwood_planks',
    'byg:skyris_planks',
    'byg:sythian_planks',
    'byg:willow_planks',
    'byg:witch_hazel_planks',
    'byg:zelkova_planks',
    'forbidden_arcanus:arcane_edelwood_planks',
    'forbidden_arcanus:carved_cherrywood_planks',
    'forbidden_arcanus:cherrywood_planks',
    'forbidden_arcanus:edelwood_planks',
    'forbidden_arcanus:fungyss_planks',
    'forbidden_arcanus:mysterywood_planks',
    'minecraft:acacia_planks',
    'minecraft:birch_planks',
    'minecraft:crimson_planks',
    'minecraft:dark_oak_planks',
    'minecraft:jungle_planks',
    'minecraft:jungle_planks',
    'minecraft:oak_planks',
    'minecraft:spruce_planks',
    'minecraft:warped_planks',
    'naturesaura:ancient_planks',
    'quark:azalea_planks',,
    'quark:blossom_planks',
    'silentgear:netherwood_planks'
]; */

/*
 Log = l
 planks = p
 slabs = sl
 stripped = st
 wood = w
*/

woodTypes.forEach((wood_type) => {
    var variant_Split = wood_type.split(":")
    var l_Suff
    var mod_id = variant_Split[0]
    var w_Type = variant_Split[1]
    var stemN = ""
    
        switch (w_Type) {
            default:
                l_Suff = "";
            break;
            case "imparius":
                l_Suff = stemN;
            break;
            case "sythian":
                l_Suff = stemN;
            break;
            case "fungyss":
                l_Suff = stemN;
            break;
            case "crimson":
                l_Suff = stemN;
            break;
            case "warped":
                l_Suff = stemN;
            break;
            case "bulbis":
                l_Suff = stemN;
        }
    
    block_Log = mod_id + ":" + w_Type + l_Suff;
    block_Str = mod_id + ":stripped_" + w_Type + l_Suff;
    block_Plank = mod_id + ":" + w_Type + "_planks";

    var woodType = {
        mod_id: mod_id,
        block_Log: block_Log,
        block_Str: block_Str,
        block_Plank: block_Plank
    };
    builtWoodTypes.push(woodType)
})


console.info(builtWoodTypes)
console.info("Finished "+filename)