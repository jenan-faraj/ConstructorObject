// Q1
const persons = {
  firstName: ["John", "Alex", "Alice", "Thor", "Soso"],
};
function firstName(objects) {
  let names = Object.values(objects);
  return console.log(names);
}
firstName(persons);

// Q2

function objectToArray(obj) {
  let objKey = Object.keys(obj);
  let objValue = Object.values(obj);

  return console.log([...objKey, ...objValue]);
}
objectToArray({ firstName: "Moh", age: 24 });

// Q3

function Car(brand ,model ,year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    return getDetails = `Brand: ${brand}, Model: ${model}, Year: ${year}`;
}
let carOne = new Car("range rover","Sport", 1999);
let carTwo = new Car("toyota","camry", 2002);
let carThree = new Car("kia","optima", 1997);

console.log(carOne)
console.log(carTwo)
console.log(carThree)
console.log(Car("range rover","Sport", 1999))
console.log(Car("toyota","camry", 2002))
console.log(Car("kia","optima", 1997))
