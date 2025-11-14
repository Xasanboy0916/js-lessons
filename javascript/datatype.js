// Data types - ma'lumot turlari
// Primitive types va Reference types

// * 1. number
let myFavoriteNumber = 7;
console.log(myFavoriteNumber);
//type cheking
//type operator
console.log(typeof myFavoriteNumber); //number
console.log(typeof 12.77); //number

// * 2. string
let txt = "text";
console.log(typeof "Test", typeof `lorem`); //string

//* 3. boolean (True, false)
let isAdmin = true;
let isMerrried = false;
console.log(isAdmin, typeof isMerrried); //boolean

//* 4. undefined
let lastName;
console.log(lastName, typeof lastName); //undefined
lastName = "Muxtorov";
var userName;
console.log(typeof lastName); //string

// * 5. null
let user = null;
console.log(typeof user);
// ...
user = {
  name: "Manual Tester",
  phone: "+998991234567",
  email: "manualtester283@gmail.com",
};

//* 6. BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); //bigint

//* 7. Symbol
// Symbol - bu noyob idendifikatsiya yaratish uchun ishlatiladigan ma'lumot turi
let sym = Symbol("id");
console.log(typeof sym); //symbol

// Reference types  (object types)
// * 8. Object

let admin = {
  login: "superadmin",
  password: "admin12345",
  isSuperAdmin: false,
};

console.log(admin);
console.log(admin.login, admin.password); //superadmin
console.log(typeof admin); //object

// * 9. Array
let nums = [12, 77, 1.75, 45, 45.89];
console.log(nums, typeof nums);

//* 10.function
function addNumbers(a, b) {
  return a + b;
}

console.log(typeof addNumbers(1, 5)); //6
