const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

const waterCreature = mythicalCreatures.find(function (element) {
  return element.type === "Water";
});

const griffinIndex = mythicalCreatures.findIndex(function (creature) {
  return creature.name === "Griffin";
});

const forestCreature = mythicalCreatures.find(function (location) {
  return location.lastSeen === "Enchanted Forest";
});

console.log(waterCreature.name, griffinIndex, forestCreature.name);
