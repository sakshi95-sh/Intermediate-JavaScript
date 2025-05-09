
// You are provided with an array of users where each user has **`firstName`**, **`lastName`**, and **`points`**.

// Your task is to iterate over this array using the **`map`** method and return a new array with new properties **`fullName`** and **`membershipStatus`**, where **`fullName`** is a combination of **`firstName`** and **`lastName`**, and **`membershipStatus`** is **`Premium`** if the user's points are more than 100, and **`Standard`** otherwise. Print the new array.

const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

// const userDetails = users.map(function (val, idx, arr) {
// 	if (val.points > 100) {
// 		return {
// 			fullName:val.firstName + val.lastName,
// 			membershipStatus:Premium,
// 		}
// 		else
// 		{
		  
// 		}
	 
// })

const userDetails = users.map(function (val, idx, arr) {
	if (val.points > 100) {
		return {
			fullName: val.firstName+ ' ' + val.lastName,
			membershipStatus:'Premium',
		 }
	}
	else {
	return{	fullName: val.firstName + ' ' + val.lastName,
		membershipStatus: `Standard`,
			}
	}
	 
})
//  membershipStatus: user.points > 100 ? "Premium" : "Standard"