const Person = function (name,gender,year) {
  this.name = name;
  this.gender = gender;
  this.year = year; 
}

Person.prototype.calAge = function () {
  age = new Date().getFullYear() - this.year;
  console.log(age)
}

const john = new Person('John', 'Male', 1990)
console.log(john.calAge());
console.log(john);


const merry = new Person('Merry', 'Female', 1990)
console.log(merry);


const carl = new Person('carl', 'Male', 1990)
console.log(merry);

let mark = {
  name: 'mark',
  age: 18,
  calAge: function() {
  age = new Date().getFullYear() - this.year;
  console.log(age)
  }
  
}
// const user= New mark() //Will create empty OBJECT which will have Prototype as Object