// // Array Methods

// // at() method
// let cars = ['audi', 'BMW', 'Porsche']

// console.log(cars.at(1)) // BMW
// console.log(cars.at(4)) // undefined
// console.log(cars.at(-1)) // Porsche

// // 2. toString() method
// console.log(cars.toString()) // audi,BMW,Porsche

// console.log(typeof cars)
// console.log(Array.isArray)

// // 3. push() method
// let newLength = cars.push('Mitsubishi', 'Toyota')

// console.log(cars) // ['audi', 'BMW', 'Porsche', 'Mitsubishi', 'Toyota']
// console.log(newLength)

// // 4. unshift() method
// let newLength2 = cars.unshift('Lexus', 'Honda')
// console.log(cars) // ['Lexus', 'Honda', 'audi', 'BMW', 'Porsche', 'Mitsubishi', 'Toyota']
// console.log(newLength2)

// // 5. pop() method
// let lastElement = cars.pop()
// console.log(cars)
// console.log(lastElement)

// // 6. shift() method
// let firstElement = cars.shift()
// console.log(cars)
// console.log(firstElement)

// // 7. join() method
// console.log(cars.join(' - ')) // Honda - audi - BMW - Porsche - Mitsubishi

// // 8. Concat() method
// const myGirls = ['Alina', 'Jenny']
// const myBoys = ['John', 'Jack', 'Alex']
// const myChildren = myGirls.concat(myBoys).concat(cars)
// console.log(myChildren) // ['Alina', 'Jenny', 'John', 'Jack', 'Alex', 'Honda', 'audi', 'BMW', 'Porsche', 'Mitsubishi']

// // 9. indexOf() method
// console.log(cars)
// console.log(cars.indexOf('BMW')) // 2
// console.log(cars.indexOf('Mitsubishi')) // -1;

// // 10. includes() method
// console.log(cars.includes('Porsche')) // true
// console.log(cars.includes('Tesla')) // false

// // 11. slice() method
// console.log(cars.slice(1, 4)) // [ 'audi', 'BMW', 'Porsche' ]

// // 12. splice() method
// console.log(cars.splice(2, 2))
// console.log(cars.splice(1))

// const fruits = ['Banana, Orange, Apple, Mango']
// fruits.splice(2, 0, 'lemon', 'kiwi')
// console.log(fruits) // [ 'Banana, Orange, lemon, kiwi, Apple, Mango' ]

// ForEach Method
// console.log(fruits)
// fruits.forEach((value, index) => {
// 	console.log(value, index)
// })
// // Foreach Method simple For loop
// for (let i = 0; i < fruits.length; i++) {
// 	console.log(fruits[i])
// }
// // Foreach Method For-of loop
// for (let element of fruits) {
// 	console.log(element)
// }

// const numbers = [-5, 8, 0, 12, -6, 5]
// // DRY - Don't Repeat Yourself
// const positiveNumbers = []
// const negativeNumbers = []
// for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] > 0) {
// 		positiveNumbers.push(numbers[i])
// 	} else {
// 		negativeNumbers.push(numbers[i])
// 	}
// }
// console.log(positiveNumbers, negativeNumbers)

// const numbers1 = []
// for (let element of numbers) {
// 	if (element % 3 === 0) {
// 		numbers1.push(element)
// 	}
// }
// console.log(numbers1)

// console.log(numbers)
// numbers.forEach((value, index) => {
// 	console.log(value, index)
// })

// map() methods

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumbers = numbers.map(value => value * 2)
// console.log(newNumbers)

// const mappedArray = numbers.map((value, index) => {
// 	return `Son ${index + 1}: ${value}`
// })
// console.log(mappedArray)

// Filter() Method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const nums = numbers.filter(value => value > 5)
// console.log(nums)

// Find() Method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const foundNum = numbers.find(value => value > 7)
// console.log(foundNum) // 8

// FindIndex() Method

// const foundIndex = numbers.findIndex(value => value > 7)
// console.log(foundIndex) // 7

// Sort() Method
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
// const sortedArray = fruits.sort()
// console.log(sortedArray) // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// // Output [ 'Apple', 'Banana', 'Mango', 'Orange' ]
// const numbers = [40, 100, 1, 5, 25, 10]
// const sortedNumbersAsce = numbers.sort((a, b) => a - b)
// console.log(sortedNumbersAsce) // [ 1, 5, 10, 25, 40, 100 ]

// const sortedNumbersDesc = numbers.sort((a, b) => b - a)
// console.log(sortedNumbersDesc) // [ 100, 40, 25, 10, 5, 1 ]
