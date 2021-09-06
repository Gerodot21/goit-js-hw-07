const input = document.querySelector("#validation-input");
const lengthEl = input.getAttribute("data-length");
input.addEventListener("blur", onInput);
function onInput() {
	if (Number(lengthEl) === input.value.length) {
		input.classList.remove("invalid");
		input.classList.add("valid");
	} else {
		input.classList.remove("valid");
		input.classList.add("invalid");
	}
}
