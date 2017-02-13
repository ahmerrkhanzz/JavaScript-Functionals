JS Reduce method examples
var arr = [
    {name: "ahmer", age: "25", occupation: "js dev", email: "ahmerrkhanzz@gmail.com"},
	{name: "saeed", age: "26", occupation: "php dev", email: "ahmerrkhanzz@yahoo.com"},
	{name: "khan", age: "27", occupation: "nodejs dev", email: "ahmerrkhanzz@outlook.com"}
];
var e = arr.reduce(function(all, item, index) {
	all[item.email] = item.occupation;
	return all;
}, {});
console.log(e);
