let user = {
	name: "Kolya",
	age: 15,
	change: function NewUser(name = user.name, age = user.age) {
		this.name = name;
		this.age = age;
	},
};
let userCopy = new user.change();
console.log(userCopy);

user.change("Victor", 44);
console.log(user);
