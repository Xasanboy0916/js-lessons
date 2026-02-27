// // Sccessing elments content
// // 1. InnerText/textContent - element ichidagi textni oladi
// const element = document.getElementById('learn')
// console.log(element)
// console.log(element.innerText)
// console.log(element.textContent)
// element.innerText = 'Learn DOM'
// console.log(element)

// // 2. InnerHTML - element ichidagi HTML kodni oladi
// const divElement = document.querySelector('.box')
// console.log(divElement)
// divElement.innerHTML = '<h2>Heading 2</h2>'

// Accessing element attributes
// const titleElement = document.querySelector('.title')
// console.log(titleElement.getAttribute('id'))
// console.log(titleElement.getAttribute('style'))
// titleElement.setAttribute('style', 'color: red;')
// titleElement.setAttribute('class', 'title2')
// console.log(titleElement)

// const image = document.getElementById('img')
// console.log(image.getAttribute('src'))
// image.setAttribute('src', '../images/screen.png')
// image.setAttribute('alt', 'Screenshot 2')
// image.setAttribute('width', '600')
// console.log(image)

// // elemetn style property
// const h2Element = document.querySelector('h2')
// console.log(h2Element.style) // CSSStyleDeclaration
// h2Element.style.color = 'blue'

// Manipuling Structure
// 1. document.createElement() - element yaratadi
// const spanElement = document.createElement('span')
// spanElement.innerText = 'Span element'

// 2. appendChild() - elementni boshqa element ichiga joylashtiradi
// divElement.appendChild(spanElement)
// divElement.appendChild(pElement)
// pElement.style.color = 'darkgreen'

// 3. removeChild() - HTML element ichidagi elementni o'chiradi
// h2Element2 = document.querySelector('.box h2')
// console.log(h2Element2);
// divElement.removeChild(h2Element2)

// 4. repslaceChild() - elementni boshqa element bilan almashtiradi
// const h2Element = document.createElement('h2')
// h2Element.innerText = 'New Heading 2'
