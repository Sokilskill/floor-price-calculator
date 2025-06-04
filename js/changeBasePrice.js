const basePriceInput = document.getElementById("base-price");

let basePrice = parseInt(basePriceInput.value);

basePriceInput.addEventListener("change", (event) =>
  changePrice(event.target.value)
);

const changePrice = (newPrice) => {
  const value = parseInt(newPrice);

  if (value >= 50 && value <= 1000) {
    basePrice = value;
  } else {
    basePriceInput.value = basePrice;
  }
};

export function getBasePrice() {
  return basePrice;
}
