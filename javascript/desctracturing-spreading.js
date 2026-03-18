// // JS da destructuring(Parchalash) va spreading(Yoyish) haqida
// object destructuring
// const user = {
// 	name: 'John',
// 	age: 30,
// 	city: 'New York',
// 	country: 'USA',
// 	isMerried: false,
// }
// let name = user.name
// // let age = user.age
// // let city = user.city
// // let country = user.country
// // let isMerried = user.isMerried

// // console.log(name, age, city, country, isMerried)
// // Destructuring
// const { name: firstName, age, city, country, isMerried } = user
// console.log(name, age, city, country, isMerried)
// console.log(firstName)

// let year = 2026
// let isElectric = true
// const car = {
// 	brand: 'Ford',
// 	model: 'Mustang',
// 	year: 2020,
// 	color: 'red',
// 	isElectric: false,
// }

// const { brand, model, year: carYear, color, isElectric: carIsElectric } = car
// console.log(brand, model, carYear, color, carIsElectric)

// Array destructuring
// const toys = ["Counter-Strike 2", "Dota 2", "GTA V"]
// let a = toys[0]
// let b = toys[1]
// let c = toys[2]
// console.log(a, b, c);

// // Destructuring
// const toys = ['Counter-Strike 2', 'Dota 2', 'GTA V']
// const [a, b, c] = toys
// console.log(a, b, c) // Counter-Strike 2 Dota 2 GTA V

// const colors = ['qizil', 'yashil', "ko'k"]
// const [first, second, third] = colors
// console.log(first) // qizil
// console.log(second) // yashil
// // O'tkazib yuborish
// const [, , thirdColor] = colors
// console.log(thirdColor) // ko'k

// // Spreading ooperatori
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// console.log(arr1) // [1, 2, 3]
// console.log(...arr1) // 1 2 3

// // Arraylarni birlashtirish
// console.log(arr1.concat(arr2)) // [1, 2, 3, 4, 5, 6]
// const combinedArray = [...arr1, ...arr2]
// console.log(combinedArray) // [1, 2, 3, 4, 5, 6]

// // Arrayni copy qilish
// const copiedArray = [...arr1]
// console.log(copiedArray) // [1, 2, 3]

// // Objectlarni birlashtirish
// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 }
// const combinedObject = { ...obj1, ...obj2 }
// console.log(combinedObject) // { a: 1, b: 2, c: 3, d: 4 }

// const user2 = {
// 	name: 'Ali',
// 	age: 25,
// }

// const updatedUser = { ...user2, age: 26 }
// console.log(updatedUser)

// // Rest operatori ...(Yig'ish operatori)
// // Arrayda ishlatish
// const numbers = [1, 2, 3, 4, 5]
// const [first, second, , , num] = numbers
// console.log(first, second, num) // 1 2

// // Objectda ishlatish
// const person = {
// 	name: 'Sara',
// 	age: 28,
// 	city: 'Los Angeles',
// 	country: 'USA',
// 	isMarried: false,
// }

// const { name: personName, age: personAge, ...others } = person
// console.log(personName, personAge) // Sara 28
// console.log(others) // { city: 'Los Angeles', country: 'USA', isMarried: false }

// Function argument sifatida rest operatorini ishlatish
// const numbers = [1, 2, 3, 4, 5]
// function sum(...numbers) {
// 	// 	console.log(numbers) // [1, 2, 3, 4, 5]
// 	return numbers.reduce((a, b) => a + b, 0)
// }

// console.log(sum(1, 2, 3, 4, 5))
// console.log(sum(6, 8, 10, 12))

// // Function parameterlarini destructuring qilish
// function greet({ name, age }) {
// 	console.log(`Salom ${name}! Yoshingiz: ${age}`)
// }
// greet({ name: 'Ali', age: 16 }) // Salom Ali! Yoshingiz: 25

// Swap value
let f = 5
let g = 7

// 1. usul
// let temp = f
// f = g
// g = temp
// console.log(f, g)[ // 7 5
