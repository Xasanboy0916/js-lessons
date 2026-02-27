// // Array metodlari va ishlatilishi
// let fruits = ['Apple', 'Banana', 'Cherry']
// console.log(fruits)

// // Array uzunligi
// console.log('Array length:', fruits.length)

// // Element qo'shish
// fruits.push('Orange')
// console.log('After push:', fruits)

let users = [
	{
		id: 1,
		name: 'John',
		email: 'John@example.com',
	},
	{
		id: 2,
		name: 'Jane',
		email: 'Jane@example.com',
	},
	{
		id: 3,
		name: 'Doe',
		email: 'Doe@example.com',
	},
]
for (let i = 0; i < users.length; i++) {
	console.log(users[i].name + ' ' + users[i].email)
}
