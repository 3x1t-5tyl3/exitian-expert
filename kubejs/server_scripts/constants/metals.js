// priority: 0
var filename = "constants/metals.js"

console.info("Starting " + filename)

/* 

METAL TYPES BELOW

*/

const allIngots = [{
        type: "aluminum",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "alltheores",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "azure_electrum",
        isAlloy: true,
        hasDust: true,
        hasPlate: false,
        hasGear: false,
        hasRod: false,
        isMagical: false,
        modId: "silentgear",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "azure_silver",
        isAlloy: false,
        hasDust: true,
        hasPlate: false,
        hasGear: false,
        hasRod: false,
        isMagical: false,
        modId: "silentgear",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "brass",
        isAlloy: true,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "alltheores",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "bronze",
        isAlloy: true,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "alltheores",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "constantan",
        isAlloy: true,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "copper",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "crimson_iron",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "silentgear",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "crimson_steel",
        isAlloy: true,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "silentgear",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "ender",
        isAlloy: true,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "extendedcrafting",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "enderium",
        isAlloy: true,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "enhanced_ender",
        isAlloy: true,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "extendedcrafting",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "gold",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "invar",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "iron",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "lead",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "lumium",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "neptunium",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "netherite",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "nickel",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "obsidian",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "osmium",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "platinum",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "redstone",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "refined_glowstone",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "refined_obsidian",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "signalum",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "silver",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "steel",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "tyrian_steel",
        isAlloy: true,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "uranium",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    },
    {
        type: "zinc",
        isAlloy: false,
        hasDust: true,
        hasPlate: true,
        hasGear: true,
        hasRod: true,
        isMagical: false,
        modId: "minecraft",
        rarity: 1,
        harvestLevel: 2
    }
]



console.info("Finished " + filename)