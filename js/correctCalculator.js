import { getBasePrice } from "./changeBasePrice.js";
const basePrice = getBasePrice();

document
  .getElementById("correct-calculate")
  .addEventListener("click", function () {
    const input = document.getElementById("correct-input");
    const error = document.getElementById("correct-error");
    const result = document.getElementById("correct-result");
    const discountDisplay = document.getElementById("correct-discount");
    const finalPriceDisplay = document.getElementById("correct-final-price");

    const value = input.value.trim();

    if (
      value === "" ||
      isNaN(value) ||
      value < 1 ||
      value > 100 ||
      value.startsWith("0") ||
      value.includes(".")
    ) {
      error.classList.remove("hidden");
      result.classList.add("hidden");
      return;
    }

    const numValue = parseInt(value);
    error.classList.add("hidden");

    let discount = 0;
    let finalPrice = basePrice;
    if (numValue <= 20) {
      discount = 0;
    } else if (numValue <= 50) {
      discount = 15;
    } else if (numValue <= 54) {
      discount = 17;
    } else if (numValue <= 74) {
      discount = 20;
    } else if (numValue === 75) {
      discount = 25;
    } else {
      discount = 30;
    }

    finalPrice = (basePrice * (100 - discount)) / 100;

    discountDisplay.textContent = discount;
    finalPriceDisplay.textContent = finalPrice.toFixed(2);
    result.classList.remove("hidden");
  });
