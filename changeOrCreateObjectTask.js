let user = {
	name: "Kolya",
	age: 15,
	changeOrCreateObject(name, age) {
		let userCopy = {};
		if(name !== undefined || age !== undefined) {
			this.name = name;
			this.age = age;
		} else {
			for(let key in this) {
				userCopy[key] = user[key];
			}
			return userCopy;
		}
	},
};

Object.defineProperty(user, "changeOrCreateObject", {
	enumerable: false,
});

let userCopy = user.changeOrCreateObject();

user.changeOrCreateObject("Victor", 44);
console.log(userCopy);
console.log(user);