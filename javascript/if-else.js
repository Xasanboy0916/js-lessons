// const number = 7;
// if (number > 0 && number < 5) {
//   console.log("Berilgan son musbat");
// } else {
//   console.log("Berilgan son manfiy");
// }

// console.log("if blockidan keyin code qatori");
// const score = 34;
// if (score >= 56 && score <= 69) {
//   console.log("Sizning bahoingiz 3 baho");
// } else if (score >= 70 && score <= 85) {
//   console.log("Sizning bahoingiz 4 baho");
// } else if (score >= 86 && score <= 100) {
//   console.log("Sizning bahoingiz 5 baho");
// } else (score >= 0 && score <= 55) {
//   console.log("Siz imtihondan o'taolmadingiz");
// }

let productPrice = 100;
const isMember = true;
const hasCoupon = false;

if (isMember) {
  console.log("10% chegirma olasiz");
  productPrice = productPrice - productPrice * 0.9;
}
if (hasCoupon) {
  console.log("5% chegirma olasiz");
  productPrice = productPrice - productPrice * 0.95;
}

if (productPrice < 50) {
  console.log("5% chegirma");
  productPrice = productPrice - productPrice * 0.95;
}
