const cvc = document.querySelector(".cvc");
const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const expDate = document.querySelector(".exp-date");

const errorBorder = "hsl(0, 100%, 66%)";

const inputName = document.querySelector('input[name="cardName"]');
const inputNumber = document.querySelector('input[name="cardNumber"]');
const inputMonth = document.querySelector('input[name="month"]');
const inputYear = document.querySelector('input[name="year"]');
const inputCvc = document.querySelector('input[name="cvc"]');

function checkInput(input) {
	//validation
	switch (input.name) {
		case "cardName":
			if (input.value.length <= 0) {
				input.parentElement.children[2].textContent = "Can't be blank!";
				input.classList.add("error");
				cardName.textContent = input.value;
			} else if (!/^[A-Za-z\s]*$/.test(input.value)) {
				input.parentElement.children[2].textContent =
					"Can only contain letters!";
				input.classList.add("error");
			} else {
				input.parentElement.children[2].textContent = "";
				input.classList.remove("error");
				cardName.textContent = input.value;
			}
			break;
		case "cardNumber":
			if (input.value.length <= 0) {
				input.parentElement.children[5].textContent = "Can't be blank!";
				input.classList.add("error");
				cardNumber.textContent = input.value;
			} else if (!/^(\s*[0-9]+\s*)+$/.test(input.value)) {
				input.parentElement.children[5].textContent = "Wrong format!";
				input.classList.add("error");
			} else if (input.value.length > 20) {
				input.parentElement.children[5].textContent = "Too long!";
				input.classList.add("error");
			} else {
				input.parentElement.children[5].textContent = "";
				input.classList.remove("error");
				cardNumber.textContent = input.value;
				if (input.value.replace(/ /g, "").length % 4 == 0) {
					input.value += " ";
				}
			}
			break;
		case "month":
			if (input.value <= 0) {
				input.parentElement.parentElement.children[2].textContent =
					"More than 0!";
				input.classList.add("error");
			} else if (input.value > 12) {
				input.parentElement.parentElement.children[2].textContent = "Max 12!";
				input.classList.add("error");
			} else {
				input.parentElement.parentElement.children[2].textContent = "";
				input.classList.remove("error");
				expDate.textContent.split("/");
				arr[0] = input.value;
				expDate.textContent = arr[0];
			}

			break;
		case "year":
			if (input.value <= 1950) {
				input.parentElement.parentElement.children[2].textContent =
					"Above 1950!";
				input.classList.add("error");
			} else if (input.value > 2022) {
				input.parentElement.parentElement.children[2].textContent = "Max 2022!";
				input.classList.add("error");
			} else {
				input.parentElement.parentElement.children[2].textContent = "";
				input.classList.remove("error");
			}
			break;
		case "cvc":
			if (input.value.length > 3 || input.value.length < 3) {
				input.parentElement.children[2].textContent = "Must be 3 digits!";
				input.classList.add("error");
			} else if (input.value <= 0) {
				input.parentElement.children[2].textContent = "Can't be negative!";
				input.classList.add("error");
			} else {
				input.parentElement.children[2].textContent = "";
				input.classList.remove("error");
			}
	}
}
