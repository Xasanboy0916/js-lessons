// Funksiya va uning ishlatilishi
// 1. Function declaration (e'lon qilish)

// function logMessage() {
// 	console.log('This is a message from a function declaration.')
// }

// logMessage() // Funksiyani chaqirish

// function addition() {
// 	let a = 5
// 	let b = 10
// 	let sum = a + b
// 	return sum
// }

// let resault = addition() // 15
// console.log(resault)
// console.log(addition()) // to'g'ridan to'g'ri conole ga chiqarish

// function greet(name) {
// 	return `Salom ${name}!`
// }

// let greetingMessage = greet('Ali')
// console.log(greetingMessage)
// console.log(greet('Ali'))
// console.log(greet('Vali'))
// console.log(greet('Hasan'))

// function multiplay(x, y) {
// 	return x * y
// }
// let product = multiplay(4, 5)
// console.log(product) // 20

// console.log(multiplay(7, 3)) //21

// function sum(n) {
// 	let = total = 0
// 	for (let i = 1; i <= n; i++) {
// 		total += i
// 	}
// 	return total
// }
// console.log(sum(10))

// function calculateFactorial(m) {
// 	let = total = 1
// 	for (let i = 1; i <= m; i++) {
// 		total *= i
// 	}
// 	return total
// }
// console.log(calculateFactorial(6))

// 2. Function expression

// const logMessage = function () {
// 	console.log('Bu oddiy matn chop qiluvchi funksiya - Function Expression')
// }

// logMessage()

// const addNumbers = function () {
// 	return a + b
// }

// let sumResualt = addNumbers(7, 8)
// console.log(sumResualt)
// console.log(addNumbers(10, 20))

// const calculateTriangleArea = function (a, b, c) {
// 	let p = (a + b + c) / 2
// 	let s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
// 	return s
// }

// let = calculateTriangleArea(3, 4, 6)
// calculateTriangleArea()

// // 3.Arrow function

// const logMessage = () => {
// 	console.log('Bu oddiy matn chop qiluvchi funksiya - Arrow Function')
// }

// logMessage()

// const concatStrings = (str1, str2) => str1 + str2

// let combinedString = concatStrings(' Salom ', 'Dunyo!')
// console.log(combinedString) // Salom Dunyo!

// const logResualtOfExam = score => {
// 	if (score < 56) console.log('Imtihondan tmolodinggiz')
// 	else if (score <= 70) console.log('Siz imtihondan 3 olmadinggiz')
// 	else if (score <= 86) console.log('Siz imtihondan 4 baho oldinggiz')
// 	else console.log('Siz imtihondan 5 baho oldinggiz')
// 	return score
// }

// console.log(logResualtOfExam(50))

// const reverseString = str => {
// 	const characters = str.split('')
// 	let reversedStr = ''

// 	for (let i = str.length - 1; i >= 0; i--) {
// 		reversedStr += characters[i]
// 	}
// 	return reversedStr
// }

// console.log(reverseString('Salom')) // molaS
// console.log(reverseString('Dunyo')) // oynuD
