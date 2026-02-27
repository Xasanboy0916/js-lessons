const student = {
	name: 'John',
	age: 20,
	course: 'Computer Science',
	address: {
		city: 'New York',
		country: 'USA',
	},
	login: function () {
		console.log('User logged in')
	},
}
console.log(student.course)
console.log(student['name'])
console.log(student.address.city)
student.login()

// object.keys() - returns an array of values
const keys = Object.keys(student)
console.log(keys)

// objetc values()

const values = Object.values(student)
console.log(values)

// object.entries() - returns an array of key-value pairs
const entries = Object.entries(student)
console.log(entries)
