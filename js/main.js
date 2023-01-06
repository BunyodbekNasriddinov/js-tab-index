const elForm = document.querySelector(".js-form");
const elBtns = document.querySelector(".js-btns");
let elInput = document.querySelector(".js-input");
let elResult = document.querySelector(".js-result");
let elPositive = document.querySelector(".js-positive");
let elNegative = document.querySelector(".js-negative");
let elNeutal = document.querySelector(".js-neutral");

function check(value) {
  switch (+value) {
    case 1:
      elResult.textContent = `${elPositive.textContent} Content`;
      elPositive.classList.add("fw-bold");
      elNegative.classList.remove("fw-bold");
      elNeutal.classList.remove("fw-bold");
      break;
    case 2:
      elResult.textContent = `${elNegative.textContent} Content`;
      elNegative.classList.add("fw-bold");
      elPositive.classList.remove("fw-bold");
      elNeutal.classList.remove("fw-bold");
      break;
    case 3:
      elResult.textContent = `${elNeutal.textContent} Content`;
      elNeutal.classList.add("fw-bold");
      elPositive.classList.remove("fw-bold");
      elNegative.classList.remove("fw-bold");
      break;
    default:
      alert("Incorrect index was written ⛔");
  }
}

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (elInput.value !== "" && !isNaN(elInput.value)) {
    elInput.classList.remove("border", "border-danger");
    check(elInput.value);
  } else {
    elInput.classList.add("border", "border-danger");
    // elInput.classList.add("border border-danger");
  }
});

elBtns.addEventListener("click", (evt) => {
  if (evt.target.matches(".js-positive")) {
    check(1);
  }
  if (evt.target.matches(".js-negative")) {
    check(2);
  }
  if (evt.target.matches(".js-neutral")) {
    check(3);
  }
});
