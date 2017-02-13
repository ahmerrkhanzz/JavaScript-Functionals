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

//reduce method for creating new object from our array
var e = arr.reduce(function(all, item, index) {
	all[item.email] = item.name;
	return all;
}, {});

//creating new object with conditions with the given array
var x = arr.reduce(function(all, item, index) {
	if(item.gender === "female"){
		all[item.email] = item.name;
	}
	return all;
}, {});

//creating new object of arrays of two know keys such as male anf female and store their relevant objects in it.
var y = arr.reduce(function(all, item, index) {
	all[item.gender].push(item);
	return all;
}, {male:[], female: []});
//in this case we have initialized our "all" object with two arrays of male and female. In each iteration the reduce will check for gender and push whole iterated object into its relevant array key.

//the map method takes the one property of array and creates a new array for it.
arr.map(function(item){
	return item.name;
});

output:
["ahmer", "saeed", "eliena", "emma"]
