//type conversion and type coerction

const age = "7";

console.log(typeof age); // string
console.log(Number("48")); // 48
console.log(typeof Number(age)); // number
console.log(Number("Text")); // NaN Not a number
console.log(Number("12a0c")); // string
console.log(Number("12.77")); // 12.77
// parseInt(), parseFloat()
console.log(parseInt("16")); // 16
console.log(typeof parseInt("17")); // number
console.log(parseInt("102.25")); // 102
console.log(parseInt("z-generation")); // NaN
console.log(parseInt("12abd")); // 12
console.log(parseInt("abd12")); // NaN
console.log(parseFloat("17.89")); // 17.89
//mashq
