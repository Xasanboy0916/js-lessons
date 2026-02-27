const countriesWrapper = document.querySelector('.countries-wrapper')
countriesWrapper.style.display = 'grid'
countriesWrapper.style.gridTemplateColumns = 'repeat(6, 1fr)'
countriesWrapper.style.gap = '8px'

let div
for (const country of countries) {
	div = document.createElement('div')
	div.innerHTML = `
		<h2>${country.name}</h2>
		<p>${country.capital}</p>
		<p>${country.region}</p>
		<p>${country.languages}</p>
		<p>${country.currencies}</p>
		<p>${country.demonyms}</p>
		<p>${country.area}</p>
		<p>${country.population}</p>
		<img src="${country.flag}" alt="${country.name} flag" width="100px">
	`
	div.className = 'country'
	countriesWrapper.appendChild(div)
	div.style.fontSize = '18px'
	div.style.textAlign = 'center'
	div.style.padding = '16px'
	div.style.borderRadius = '10px'
	div.style.border = '1px solid lightgray'
	div.style.backgroundColor = 'lightblue'
}
