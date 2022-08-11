const cvc = document.querySelector(".cvc");
const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const mainPage = document.querySelector(".form");
const thanksPage = document.querySelector(".continue-card");

const errorBorder = "hsl(0, 100%, 66%)";
let isValid = true;

function checkInput(input) {
	switch (input.name) {
		case "cardName":
			if (input.value.length <= 0) {
				input.parentElement.children[2].textContent = "Can't be blank!";
				input.classList.add("error");
				cardName.textContent = "JANE APPLESEED";
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
			if (input.value.replace(/ /g, "").length < 16 || input.value == "") {
				input.parentElement.children[5].textContent = "Can't be blank!";
				input.classList.add("error");

				if (
					input.value.replace(/ /g, "").length % 4 == 0 &&
					input.value.length > 0
				) {
					input.value += " ";
				}
				cardNumber.textContent = input.value;
			} else if (
				!/^(\s*[0-9]+\s*)+$/.test(input.value) ||
				input.value.replace(/ /g, "").length > 16
			) {
				input.parentElement.children[5].textContent = "Wrong format!";
				input.classList.add("error");
			} else {
				input.parentElement.children[5].textContent = "";
				input.classList.remove("error");
				cardNumber.textContent = input.value;
			}
			break;
		case "month":
			if (input.value <= 0) {
				input.parentElement.parentElement.children[2].textContent =
					"More than 0!";
				input.classList.add("error");
				month.textContent = "00";
			} else if (input.value > 12) {
				input.parentElement.parentElement.children[2].textContent = "Max 12!";
				input.classList.add("error");
			} else {
				input.parentElement.parentElement.children[2].textContent = "";
				input.classList.remove("error");
				if (input.value < 10) {
					month.textContent = `0${input.value.replace(/^0+/, "")}`;
				} else {
					month.textContent = input.value.replace(/^0+/, "");
				}
			}

			break;
		case "year":
			if (input.value <= 21) {
				input.parentElement.parentElement.children[2].textContent =
					"Above 2021!";
				input.classList.add("error");
				year.textContent = "00";
			} else if (input.value > 50) {
				input.parentElement.parentElement.children[2].textContent = "Max 2050!";
				input.classList.add("error");
			} else {
				input.parentElement.parentElement.children[2].textContent = "";
				input.classList.remove("error");
				year.textContent = input.value.replace(/^0+/, "");
			}
			break;
		case "cvc":
			if (input.value.length > 3 || input.value.length < 3) {
				input.parentElement.children[2].textContent = "Must be 3 digits!";
				input.classList.add("error");
				cvc.textContent = "000";
			} else if (input.value <= 0) {
				input.parentElement.children[2].textContent = "Can't be negative!";
				input.classList.add("error");
			} else {
				input.parentElement.children[2].textContent = "";
				input.classList.remove("error");
				cvc.textContent = input.value;
			}
	}
}

function confirm() {
	let inputs = document.querySelectorAll("input");
	for (let input of inputs) {
		if (input.value == "") {
			checkInput(input);
			isValid = false;
		} else if (!input.classList.contains("error")) {
			isValid = true;
		}
	}
	if (isValid) {
		mainPage.style.display = "none";
		thanksPage.style.display = "flex";
	}
}

function reset() {
	mainPage.style.display = "flex";
	thanksPage.style.display = "none";
	let inputs = document.querySelectorAll("input");
	for (let input of inputs) {
		input.value = "";
	}
	cardName.textContent = "JANE APPLESEED";
	cardNumber.textContent = "0000 0000 0000 0000";
	year.textContent = "00";
	month.textContent = "00";
	cvc.textContent = "000";
}
