const cvc = document.querySelector(".cvc");
const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const expDate = document.querySelector(".exp-date");

const inputName = document.querySelector('input[name="cardName"]');
const inputNumber = document.querySelector('input[name="cardNumber"]');
const inputMonth = document.querySelector('input[name="month"]');
const inputYear = document.querySelector('input[name="year"]');
const inputCvc = document.querySelector('input[name="cvc"]');

function checkInput(input) {
	//validation
	switch (input.name) {
		case "cardName":
			if (!/^[a-zA-Z]*$/g.test(input.value)) {
				let error = document.querySelector("#username");
				error.textContent = "Can't ";
			}
			break;
	}
}
