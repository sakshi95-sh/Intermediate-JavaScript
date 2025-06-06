//Static Method can be call for Class/Function not on Instance of Class/fuction

//1. Static Method using class

class User{
  constructor(name, email)
  {
    this.name = name;
    this.email = email;
  }
  static greet() {
    return "GOOD MORNING!!!"
  }
  city(){
    return "NEW YORK"
  }
}

let Sam = new User('Sam', 'sam@gmail.com')


console.log(User.greet());

// Using Function

const Emp = function(name,gender,city,year){
  this.name = name;
  this.gender = gender;
  this.city = city;
  this.year = year;
}

Emp.prototype.calAge = function () {
  let age = new Date().getFullYear() - this.Year;
}
Emp.greet = function () {
  return "GOOD MORNING!!!"
}

let mark = new Emp('mark','M','New York',1995);


