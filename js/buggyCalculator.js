import { getBasePrice } from "./changeBasePrice.js";
const basePrice = getBasePrice();

document
  .getElementById("buggy-calculate")
  .addEventListener("click", function () {
    const input = document.getElementById("buggy-input");
    const error = document.getElementById("buggy-error");
    const result = document.getElementById("buggy-result");
    const discountDisplay = document.getElementById("buggy-discount");
    const finalPriceDisplay = document.getElementById("buggy-final-price");

    const value = input.value.trim();

    let numValue;
    try {
      numValue = parseInt(value);
      if (isNaN(numValue)) numValue = 0;
    } catch (e) {
      numValue = 0;
    }

    let discount = 0;
    let finalPrice = basePrice;

    if (numValue >= 1 && numValue <= 20) {
      discount = 0;
    } else if (numValue >= 21 && numValue <= 50) {
      // Неправильний діапазон 21-50 (розділений на 21-25 і 26-50)
      if (numValue <= 25) {
        discount = 10; //  Не правильно за умовою має бути 15%
      } else {
        discount = 15; // Правильно
      }
    }
    // Правильний діапазон 51-54
    else if (numValue >= 51 && numValue <= 54) {
      discount = 17;
    } else if (numValue >= 55 && numValue <= 75) {
      // Неправильний діапазон 55-75 (розділений на 55-65 і 66-75)s
      if (numValue <= 65) {
        discount = 15; // Не правильно за умовою має бути 20
      } else {
        discount = 20; // Правильно
      }
    } else if (numValue === 75) {
      discount = 20;
    } else if (numValue >= 76 && numValue <= 100) {
      // Неправильний діапазон 76-100 (розділений на 76-90 і 91-100)
      if (numValue <= 90) {
        discount = 25; // Не правильно за умовою має бути 30%
      } else {
        discount = 30; // Правильно
      }
    }

    finalPrice = (basePrice * (100 - discount)) / 100;

    discountDisplay.textContent = discount;
    finalPriceDisplay.textContent = finalPrice.toFixed(2);
    result.classList.remove("hidden");
  });
