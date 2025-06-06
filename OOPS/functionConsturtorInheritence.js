let Person = function (name,gender,year) {
  this.name = name;
  this.gender = gender;
  this.year = year; 
}

Person.prototype.calAge = function () {
  age = new Date().getFullYear() - this.year;
  console.log(age)
}

let john = new Person('john', 'Male', 1995)
console.log(john);

let EmpDetails = function (name, gender, year,empID, salary, city) {
  Person(name, gender, year);
  this.empID = empID;
  this.salary = salary;
  this.city = city; 
}

EmpDetails.prototype.calSalary = function () {
  annual = `''$${this.salary * 54} `;
  console.log(annual)
}
EmpDetails.prototype.empDetails = function () {
  return this.name
}

let details=new EmpDetails('john', 'Male', 1995,4532,12000,'NY')
