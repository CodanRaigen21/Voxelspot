const menuList = [
  { "title": "Ambience", "blocks": false, "items": true, "items_crafting": false, "blocks_crafting": false },
  // { "title": "Artisan's Blocks", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Automaticraft", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Bedrock Recrafted", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  { "title": "Biome Box", "blocks": true, "items": false, "items_crafting": false, "blocks_crafting": false },
  // { "title": "Block Letters", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  { "title": "Boomerangs", "blocks": false, "items": true, "items_crafting": true, "blocks_crafting": true },
  { "title": "Bridge Cannon", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Cargo Craft", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Colorful Spiders", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Crimson Staff", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Displaydestal", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Distraction Dolls", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Domestic Mobs", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Drill Buddy", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Elemental Weapons", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  { "title": "Ender Scepter", "blocks": false, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Food!", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  { "title": "Gold Rush", "blocks": true, "items": false, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Generate and Duplicate", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  { "title": "Helpful Blocks", "blocks": true, "items": false, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Hybrid Slabs", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Item Bundler", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Laser Quarry", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Lodestone Pillars", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Mineral Signals", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Mini Mob-Grinder", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  { "title": "Mob Blocks", "blocks": true, "items": false, "items_crafting": false, "blocks_crafting": false },
  // { "title": "Mob Statues", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "More Crops", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "More Tnt", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "More Turrets", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  { "title": "Ore Seeds", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": false },
  // { "title": "Oresight", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Paint Bombs", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Potion Blocks", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Pottery", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Project: Beach", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Project: Flower Forest", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Project: Mushroom Island", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Quick Bunkers", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Rail Craft", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Recycle Craft", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Resourcefulness", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Rotated Planks", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Spawn Crafter", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  { "title": "stackzips", "blocks": true, "items": false, "items_crafting": false, "blocks_crafting": true },
  // { "title": "Tankers", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Tatsulok", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "The Variants", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Tipped Swords", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Topiary", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  { "title": "Total Carnage", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  { "title": "Useful Sides", "blocks": true, "items": false, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Useful Staffs", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Vanilla Figurines", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Villajars", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true },
  // { "title": "Xpiggy Bank", "blocks": true, "items": true, "items_crafting": true, "blocks_crafting": true }
];