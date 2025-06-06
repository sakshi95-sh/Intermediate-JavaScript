//Class is use same concept of Constructor and Object

//Two Ways to create a Class
// DECLARATION
class Person {
  constructor(name,gender,birthyear){
    this.name = name;
    this.gender = gender;
    this.birthyear = birthyear;

    // this.calAge = function () {
    //   let AGE = new Date().getFullYear() - birthyear;
    //   console.log(AGE);
    // }
  }
  calAge() {
      let AGE = new Date().getFullYear() - this.birthyear;
      console.log(AGE);
  }
  }
 
Person.prototype.greet = function () {
  console.log('GOOD MORNING', this.name);
}
    

// let Person.prototype.calAge =function () {
//       let AGE = new Date().getFullYear() - birthyear;
//       console.log(AGE);
//     }

let john = new Person('john', 'Male', 1995)
john.calAge()


// //EXPRESSION

// let Person = class {


// }