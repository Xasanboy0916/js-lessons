let name = "G'aybulla"
let hi = 'salom'
// cancatination - birlashtirihs
console.log(name + hi) // G'aybullasalom

//type conversion
let age = 16
console.log(age + 12) //28

// type coercion
console.log(name + age) // G'aybulla16

//template literals
let text = `Mening ismim ${name} va yoshim ${age} da`
console.log(text)

// String length
console.log(hi.length) //9
console.log(name.length) //9;
console.log('adminjon '.length)

//acsses characters
console.log(name[0]) // G
console.log(name[3] - 1) // y

//String object
let programming1 = new String('JavaScript')
console.log(programming1)
console.log(typeof programming1) // object

let programming2 = 'JavaScript'
console.log(programming2)
console.log(typeof programming2) // string

console.log(programming1 == programming2) // true
console.log(programming1 === programming2) // false

// String methods
let FirstName = 'Ali'
let LastName = 'Vali'
let aeg = 16

let info = `ism: ${FirstName}  Familya: ${LastName}  yosh: ${aeg}`
