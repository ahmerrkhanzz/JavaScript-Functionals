//Enumerable Properties
//These properties are iterable and visible during the for-in loop interations of object. 
//If one can want to hide some of the properties in the object then one can use the JavaScript Object.defineProperty method
//to hide the prroperties by setting the enumerable property value false.

//Example of EnumerableProperties
var car = {};
car.vin = "ABCDE12345",
car.transmission= "automatic",
car.color= "black"

for (var prop in car){
  console.log(prop + "=" + car[prop]);
}
// Output
This will console the output of all the properties

//Example of Non-Enumerable Properties
Object.defineProperty(car, "accessKeyCode"){
  enumerable: false,
  writbale: true
}
car.accessKeyCode= "shallow"
for (var prop in car){
  console.log(prop + "=" + car[prop]);
}
// Output
This will console the output of all the properties except the "accessKeyCode" property.
