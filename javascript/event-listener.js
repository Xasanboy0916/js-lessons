const btn = document.querySelector('btn')
const body = document.querySelector('body')
const input = document.querySelector('input')
const p = document.querySelector('p')

input.addEventListener('blur', e => {
	p.textContent = e.target.value
	p.style.color = 'red'
})

body.addEventListener('keypress', event => {
	alert(event.key)
})

btn.addEventListener('click', event => {
	console.log('button clicked')
	console.log('event gives the event listener oblect:', event)
	console.log(
		'event.target gives the element that triggered the event:',
		event.target,
	)
	console.log(
		'event,target.value gives the value of the element that triggered the event:',
		event.target.value,
	)
})
