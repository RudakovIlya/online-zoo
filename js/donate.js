const formPick = document.querySelector('.form-pick');

const formPickInput = document.querySelectorAll('.form-pick__input');

const formPickLabel = document.querySelectorAll('.form-pick__label');

const formPickAmount = document.querySelector('#amount2');

const amount = [5000, 2000, 1000, 500, 250, 100, 50, 25]

const pickNumber = document.querySelector('.pick__num');

function inputItem(arr, elem) {
	return arr.forEach((item, i) => {
		if (item.checked) {
			formPickAmount.value = item.value;
			elem.textContent = item.dataset.num;
		}
	})
}

formPick.addEventListener('change', () => {
	inputItem(formPickInput, pickNumber)
})

formPickAmount.addEventListener('input', (e) => {
	if (formPickAmount.value.length > 4) {
		formPickAmount.value = formPickAmount.value.slice(0, 4)
	}
	amount.forEach((item, i) => {
		if (+formPickAmount.value === item) {
			formPickInput[i].checked = true;
			inputItem(formPickInput, pickNumber)
		}
	})
})

formPick.addEventListener('submit', (e) => {
	e.preventDefault()
	alert('Спасибо, что помогаете нашим черно-белым друзьям')
})