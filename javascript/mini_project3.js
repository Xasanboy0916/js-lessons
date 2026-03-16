const divContainer = document.querySelector('.container')
divContainer.style.display = 'grid'
divContainer.style.gridTemplateColumns = 'repeat(6, 1fr)'
divContainer.style.gap = '8px'
divContainer.style.padding = '16px'

let span
for (let i = 0; i < 102; i++) {
	span = document.createElement('span')
	span.innerText = i
	divContainer.appendChild(span)
	span.style.fontSize = '32px'
	span.style.color = 'white'
	span.style.textAlign = 'center'
	span.style.padding = '16px'
	span.style.borderRadius = '10px'
	// span.style.backgroundColor = 'blue'
	span.style.color = 'lightblue'
	span.style.backgroundColor = isPrimeEvenOddNumber(i)
}

function isPrimeEvenOddNumber(number) {
	// Agar prime bo'lsa "red" qaytarilsin
	// Agar even bo'lsa "green" qaytarilsin
	// Agar odd bo'lsa "yellow" qaytarilsin
	if (number < 2) {
		return number % 2 === 0 ? 'green' : 'yellow'
	} else {
		for (let i = 2; i < number; i++) {
			if (number % i === 0) {
				return number % 2 === 0 ? 'green' : 'yellow'
			}
		}
		return 'red'
	}
}
