let Person = {
  calAge(){
    let age = new Date().getFullYear() - this.birthyear;
    return age;
  },
  greet() {
    return "Hey!!"
  },
  init(name,city,birthyear) {
    this.name = name;
    this.city = city;
    this.birthyear = birthyear;
  }

}

let john = Object.create(Person);
john.name = 'john'
john.birthyear = 1995;

let merry = Object.create(Person,
  { name: { value: 'merry' }, city: { value: 'NY' }, birthyear: { value: 1990 } }
)
let sam = Object.create(Person);
sam.init('Sam', 'London', 1985);
