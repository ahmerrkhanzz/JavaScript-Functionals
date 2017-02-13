//JS Reduce method examples
var arr = [
    	{name: "ahmer", gender: "male", age: "25", occupation: "js dev", email: "ahmerrkhanzz@gmail.com"},
	{name: "saeed", gender: "male", age: "26", occupation: "php dev", email: "ahmerrkhanzz@yahoo.com"},
	{name: "eliena", gender: "female", age: "27", occupation: "nodejs dev", email: "eliena@outlook.com"},
	{name: "emma", gender: "female", age: "27", occupation: "nodejs dev", email: "emma@outlook.com"}
];

//simple reduce method for adding ages
var ageSum = arr.reduce(function(all, item, index){
	all =+ item.age;
	return all;
},  0);
console.log("this will return the combined sum of all ages in the array.");
console.log(ageSum);

//reduce method for creating new object from our array
var e = arr.reduce(function(all, item, index) {
	all[item.email] = item.name;
	return all;
}, {});
console.log("this will return the new object with the given keys and values");
console.log(e);

//creating new object with conditions with the given array
var x = arr.reduce(function(all, item, index) {
	if(item.gender === "female"){
		all[item.email] = item.name;
	}
	return all;
}, {});
console.log("this will return the new object with the given keys and values");
console.log(x);
