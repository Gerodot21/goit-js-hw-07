const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, checkInputValue);

function checkInputValue(event) {
	const lengthValue = this.dataset.length;
	if (event.currentTarget.value.length === Number(lengthValue)) {
		input.classList = "valid";
	} else {
		input.classList = "invalid";
	}
}
