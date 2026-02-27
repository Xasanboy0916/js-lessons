// for loop
// for (let i = 1; i < 100; i++) {
// 	console.log(i)
// }
// let sum = 0
// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 === 1) {
// 		sum += i
// 	}
// }

// console.log(sum)

// for (let i = 50; i >= 1; i--) {
// 	console.log(i)
// }
// let sum = 0
// for (let i = 1; i <= 10; i++) {
// 	sum *= i
// }

// console.log(sum)

// for (let i = 1; i <= 10; i++) {
// 	if (i === 5) {
// 		console.log("Loop to'xtaydi chuni i = 5 ga ")
// 		break
// 	}
// 	console.log(i)
// }

// for (let i = 1; i <= 50; i += 3) {
// 	console.log(i)
// }

// FizzBuzz muammosi
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz')
	} else if (i % 3 === 0) {
		console.log('Fizz')
	} else if (i % 5 === 0) {
		console.log('Buzz')
	} else {
		console.log(i)
	}
}
