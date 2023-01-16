const inputValidation = document.getElementById("validation-input");
console.log(inputValidation);

inputValidation.addEventListener("blur", () => {
  const inputValue = inputValidation.value.length;
  const elChecked = inputValidation.getAttribute("data-length");

  if (inputValue <= elChecked) {
    inputValidation.classList.add("invalid");
  } else {
    inputValidation.classList.replace("invalid", "valid");
  }
});
