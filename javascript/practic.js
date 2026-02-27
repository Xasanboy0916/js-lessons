// let num0 = prompt('Son kiriting: ')
// let num1 = prompt('Son kiriting: ')
// if (num0 < num1) {
// 	console.log(num0, num1)
// } else {
// 	console.log(num0)
// }

// let a = +prompt('1 sonni kiriting:')
// let b = +prompt('2 sonni kiriting:')
// let c = +prompt('3 sonni kiriting:')

// if (a + b == c) {
// 	console.log('Yes!')
// } else if (b + c == a) {
// 	console.log('Yes!')
// } else if (a + c == b) {
// 	console.log('Yes!')
// } else {
// 	console.log('No!')
// }

// let x = +prompt('Birinchi sonni kiriting: ')
// let y = +prompt('Ikkinchi sonni kiriting: ')
// let z = +prompt('Uchinchi sonni kiriting: ')

// if (x < 1 && y < 1 && z < 1) {
// 	if (x >= y && x >= z) {
// 		x = (y + z) / 2
// 	} else if (y >= x && y >= z) {
// 		y = (x + z) / 2
// 	} else {
// 		z = (x + y) / 2
// 	}
// 	console.log(x, y, z)
// } else {
// 	console.log(x, y, z)
// }

// let x = +prompt('Birinchi sonni kiriting: ')
// let y = +prompt('Ikkinchi sonni kiriting: ')
// let z = +prompt('Uchinchi sonni kiriting: ')

// if (x > 0) {
// 	x = x * x
// }
// if (y > 0) {
// 	y = y * y
// }
// if (z > 0) {
// 	z = z * z
// }
// console.log(x, y, z)

// let x = +prompt('Birinchi sonni kiriting: ')
// let y = +prompt('Ikkinchi sonni kiriting: ')

// let a = (a = (x + y) / 2)
// let b = (b = 4 * x * y)
// if (x > y) {
// 	y = a
// 	x = b
// } else {
// 	y = b
// 	x = a
// }
// console.log(x.toFixed(1), y.toFixed(1))

// let x = +prompt('Birinchi sonni kiriting: ')
// let y = +prompt('Ikkinchi sonni kiriting: ')
// let z = +prompt('Uchinchi sonni kiriting: ')

// if (x + y > z || x + z > y || y + x > z) {
// 	console.log('Yes!')
// } else {
// 	console.log('No!')
// }

// let x = +prompt('Birinchi sonni kiriting: ')
// let y = +prompt('Ikkinchi sonni kiriting: ')

// if (x < 0 && y < 0) {
// 	console.log(Math.abs(x), Math.abs(y))
// } else if (x < 0 || y < 0) {
// 	x = x + 0.5
// 	y = y + 0.5
// 	console.log(x, y)
// } else {
// 	console.log(x, y)
// }

// let x = +prompt('Birinchi sonni kiriting: ')
// let y = +prompt('Ikkinchi sonni kiriting: ')

// if (x < 0 && y < 0) {
// 	x = Math.abs(x)
// 	y = Math.abs(y)
// } else if (x < 0 || y < 0) {
// 	x += 0.5
// 	y += 0.5
// }

// console.log(x, y)

// let x = +prompt('Yoshingizni kiriting: ')
// let massenge = x < 18 ? 'Kirish mumkin emas' : 'Xush kelibsiz'
// console.log(massenge)

// let number = +prompt('Son kiriting: ')
// let result = number % 2 == 0 ? 'Juft son' : 'Toq son'
// console.log(result)

switch (day) {
	case 1:
		console.log('Dushanba')
		break
	case 2:
		console.log('Seshanba')
		break
	case 3:
		console.log('Chorshanba')
		break
	case 4:
		console.log('Payshanba')
		break
	case 5:
		console.log('Juma')
		break
	case 6:
		console.log('Shanba')
		break
	case 7:
		console.log('Yakshanba')
		break
	default:
		console.log('Bunday hafta kuni yoq')
}
