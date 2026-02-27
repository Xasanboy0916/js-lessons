// DOM - Document object model - tree of nodes that represetns an HTML Page
// Node - element, text, attribute, comment
// Accessing HTML element
// console.log(document)

// const element = document.getElementById('learn')
// element.innerHTML = 'Learn DOM'
// element.style.color = 'red'
// element.innerText = 'Hello From JS'
// console.log(element)

// // get Elements By Tag Name
// const tags = document.getElementsByTagName('h1')
// console.log(tags)

// // get Elements By Class Name
// const classNames = document.getElementsByClassName('h2')
// console.log(classNames)

// // get Element By Query Selector
// const h3Element = document.querySelector('#h21')
// console.log(h3Element)

// const pElement = document.querySelector('p')
// console.log(pElement)

// get Elements By Query Selector All

const headingElements = document.querySelectorAll('.h2')
console.log(headingElements)
