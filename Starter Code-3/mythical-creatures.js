const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// Tasks:
// - Use the **`find`** method to locate the first creature of the "Water" type and log its name to the console.
// - Use the **`findIndex`** method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.
// - Use the **`find`** method to locate the first creature last seen in "Enchanted Forest".

const task1= mythicalCreatures.find(function(creature)
{
	// console.log(creature.type);
	return creature.type === 'Water'
})
console.log("TASK 1 RESULT---",task1)
	
const task2 = mythicalCreatures.findIndex(function (creature) {
	return creature.name==='Griffin'
})
console.log("TASK 2 RESULT---",task2)
const task3 = mythicalCreatures.find(function (creature) {
	return creature.lastSeen=== "Enchanted Forest"
})

console.log("TASK 3 RESULT---",task3)
