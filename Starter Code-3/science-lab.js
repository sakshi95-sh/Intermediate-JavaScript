/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
let name = 'john',age=13,studyField='CS'

const participant = {
  name, age, studyField,
}


/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

const participant1 = {
  name, age, studyField,
  displayInfo()  {
  console.log(`${this.name}, ${this.age}, ${this.studyField}`);
}
}


/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */

const participantArrow = {
  name, age, studyField,
  displayInfo:() =>(`${name}, ${age}, ${studyField}`)

}

// Unlike Regular fucntion to access function variable we don't need to use this


/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

const updateParticipantInfo = function (participantObj,key,val) {
  return {
    ...participantObj,
    [key]:val,
  }
  
}