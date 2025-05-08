/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function rest(...restArg) {
  console.log(restArg);
}
const funResult=rest('Elephant', 'Tiger', 'leopard', 'Peacock', 'Bear')
console.log('Task 1: Track Animal Sightings ',funResult);
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const merge = [...forestHabitats, ...savannahHabitats];

console.log('Task 2: Merge Habitat Areas ',merge);
/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const update = {...rhinoStatus, population: 600}
console.log('Task 3: Update Conservation Status ',update);
/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
  Updating in the copy of object will not impact the origina object, Beacuase in JS spread create deep copy for top level object store in new memory/referenece Address.
 */
const copyProfile = { ...lionProfile,genetics:'PopulationA'  }
console.log('Task 4: Catalog Genetic Diversity --- Copy of lionProfile ',copyProfile);
console.log('Task 4: Catalog Genetic Diversity --- Original Profile ',lionProfile);
/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 */

const copyEcosystemHealth = { ...ecosystemHealth } 
// const updatedEcosystemHealth = {...ecosystemHealth, foodSupply: {...ecosystemHealth.foodSupply, herbivores: "Plentiful"}};
// console.log('Task 5:Copy of Object ',copyEcosystemHealth);

 copyEcosystemHealth.foodSupply.herbivores = 'none';

console.log('Task 5: Analyze Ecosystem Health ---- Copy ',copyEcosystemHealth);
console.log('Task 5: Analyze Ecosystem Health ---- Original ',ecosystemHealth);