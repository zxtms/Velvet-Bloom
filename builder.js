const quantitySlider = document.getElementById("quantity");
const quantityValue = document.getElementById("quantity-value");

quantitySlider.addEventListener("input", function () {
    quantityValue.textContent = quantitySlider.value;
});
const flowerPrices = {
    rose: 250,
    peony: 450,
    ranunculus: 350,
    orchid: 500
};
const packagePrices = {
    none: 0,
    craft: 300,
    matte: 500,
    box: 900
};
function calculatePrice() {
    const selectedFlower = document.querySelector('input[name="flower"]:checked');
    const selectedPackage = document.querySelector('input[name="package"]:checked');

    if (!selectedFlower || !selectedPackage) {
        return;
    }

    const quantity = Number(quantitySlider.value);

    const flowerPrice = flowerPrices[selectedFlower.value];
    const packagePrice = packagePrices[selectedPackage.value];

    const totalPrice = flowerPrice * quantity + packagePrice;

    document.getElementById("total-price").textContent = totalPrice;
}
const flowerOptions = document.querySelectorAll('input[name="flower"]');
const packageOptions = document.querySelectorAll('input[name="package"]');

flowerOptions.forEach(function (option) {
    option.addEventListener("change", calculatePrice);
});

packageOptions.forEach(function (option) {
    option.addEventListener("change", calculatePrice);
});

quantitySlider.addEventListener("input", calculatePrice);
const colorNames = {
    light: "Светлый",
    pink: "Розовый",
    burgundy: "Бордовый"
};

const stemNames = {
    standard: "Стандартная",
    long: "Длинная"
};

function updateSummary() {
    const selectedColor = document.querySelector('input[name="color"]:checked');
    const selectedStem = document.querySelector('input[name="stem"]:checked');

    const color = selectedColor
        ? colorNames[selectedColor.value]
        : "не выбран";

    const stem = selectedStem
        ? stemNames[selectedStem.value]
        : "не выбрана";

    document.getElementById("bouquet-summary").textContent =
        `Оттенок: ${color}. Длина стебля: ${stem}.`;
}

document.querySelectorAll('input[name="color"], input[name="stem"]')
    .forEach(function (option) {
        option.addEventListener("change", updateSummary);
    });

updateSummary();