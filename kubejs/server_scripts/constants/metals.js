// priority: 0
var filename = "constants/metals.js"

console.info("Starting "+filename)

let builtMetalTypes = [];

const metalTypes = [
    ""
]

woodTypes.forEach((wood_type) => {
    var variant_Split = wood_type.split(":")
    var w_Suffix = ""
    var mod_id = variant_Split[0]
    var w_Type = variant_Split[1]
    
        switch (w_Type) {
            default:
                w_Suffix = "_log";
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

console.info("Finished "+filename)