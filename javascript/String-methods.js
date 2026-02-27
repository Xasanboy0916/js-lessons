// String metodlari va hususiyatlari
let sample = 'Hello World!'

// Trim metodini ishlatish
console.log(sample.trim())

sample = sample.trim()
// ToUpperCase barcha harflarni katta qiladi
console.log(sample.toUpperCase()) // HELLO WORLD
// ToLowerCase barcha harflarni kichik qiladi
console.log(sample.toLowerCase()) // hello world

// ChartAt indeksi bo'yicha belgini qaytaradi
console.log(sample.charAt(7)) // o
// CharCodeAt indeksi bo'yicha belgining unicode qiymatini qaytaradi
console.log(sample.charCodeAt(7)) // 111

// at() indeksi bo'yicha belgini qaytaradi
console.log(sample.at(4)) // o
console.log(sample.at(-1)) // d

// Cancat() ikkita yoki undan ko'p stringlarni birlashtiradi
let greet = 'Hello'
let place = 'World'
console.log(greet.concat(place)) // Hello World
console.log(greet.concat(', ', place, '!')) // Hello World!

// Slice(start, end) stringning bir qismini qaytaradi
console.log(sample.slice(0, 5)) // Hello
console.log(sample.slice(6)) // World!

// Substring(start, end) stringning bir qismini qaytaradi lekin manfiy indeksni qabul qilmaydi
console.log(sample.substring(0, 5)) // Hello
console.log(sample.substring(6)) // World!

// PadStart methods
let code = '123'
console.log(code.padStart(6, '0')) // "000123"
console.log(code.padStart(8, 'x')) // "xxxxx123"

//Pad End methods
console.log(code.padEnd(6, '0')) // "123000"
console.log(code.padEnd(8, 'x')) // "123xxxxx"

// Repeat methods
let laugh = 'ha'
console.log(laugh.repeat(3)) // hahaha
console.log(laugh.repeat(0)) // ""

// Replace methods
let phrase = 'I like JavaScript. JavaScript is fun.'
let newPhrase = phrase.replace('JavaScript', 'Python')
console.log(newPhrase) // I like Python. JavaScript is fun.

// ReplaceAll methods
console.log(newPhrase) // I like Phyton. Phyton is fun.

// Startwith(searchValue) - string berilgan qiymat bilan boshlanadimi? Shuni tekshiradi
console.log(phrase.startsWith('I like')) // True
console.log('JavaScript') // False

// EndsWith(searchValue) - string berilgan qiymat bilan tugaydimi? Shuni tekshiradi
console.log(phrase.endsWith('is fun.')) // True
console.log(phrase.endsWith('JavaScript')) // False

// Includes(searchValue) - string berilgan qiymatni o'z ichiga oladimi? Shuni tekshiradi
console.log(phrase.includes('like')) // True
console.log(phrase.includes('Python')) // False

// Split(separator) - stringni berilgan ajratgich bo'yicha bo'lib beradi
let csv = 'apple,banana,cherry'
let fruits = csv.split(',')
console.log(fruits) // ['apple', 'banana', 'cherry']

//IndexOf (searchValue) - stringda berilgan qiymatning birinchi uchrashuvining indeksini qaytaradi
console.log(phrase.indexOf('JavaScript')) // 7
console.log(phrase.indexOf('Python')) // -1 (Topilmasa -1 qaytaradi)
