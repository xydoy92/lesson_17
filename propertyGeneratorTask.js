let object = {
	set generator(array) {
		for(let item of array) {
			this[item.propertyTitle] = item.propertyValue;
		}
	}
};

object.generator = [{propertyTitle: 'name', propertyValue: 'Sasha'},
					{propertyTitle: 'age', propertyValue: 17},
					{propertyTitle: 'hobbies', propertyValue: ['reading', 'PS4']}
];

console.log(object);