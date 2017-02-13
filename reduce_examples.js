//JS Reduce method examples
var arr = [
    {name: "ahmer", age: "25", occupation: "js dev", email: "ahmerrkhanzz@gmail.com"},
	{name: "saeed", age: "26", occupation: "php dev", email: "ahmerrkhanzz@yahoo.com"},
	{name: "khan", age: "27", occupation: "nodejs dev", email: "ahmerrkhanzz@outlook.com"}
];

var ageSum = arr.reduce(function(all, item, index){
	all =+ item.age;
	return all;
},  0);
console.log("this will return the combined sum of all ages in the array.");
console.log(ageSum);
var e = arr.reduce(function(all, item, index) {
	all[item.email] = item.occupation;
	return all;
}, {});
console.log("this will return the new object with the given keys and values");
console.log(e);
