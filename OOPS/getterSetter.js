//There are two type of Properties in JS
// 1. Data Properties
// 2. Accessor Properties - Get and Set


//Encapsulation
class Emp {
  constructor()
  {
    this.name = 'john';
    this.ID = 1224;
    this.city = 'New York';
  }
  get getName() {
    return  this.name;
  }

  set setID(val) {
    this.ID = val;
  }
}

let john = new Emp();
// john.name; - THis is get we don't need to put ()
//new Oject