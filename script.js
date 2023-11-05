// Получаем ссылки на необходимые элементы
const optionsSelect = document.getElementById('options');
const quantityInput = document.getElementById('quantity');
const serviceTypeInputs = document.querySelectorAll('input[name="serviceType"]');
const propertyCheckbox = document.getElementById('property');
const totalPriceSpan = document.getElementById('totalPrice');

// Определение стоимостей услуги
const prices = {
  type1: 200,
  type2: 0
};

// Обработчик изменения опций, количества, типа услуги и свойства
function calculateTotalPrice() {
  const selectedOption = parseInt(optionsSelect.value);
  const quantity = parseInt(quantityInput.value);
  const selectedServiceType = document.querySelector('input[name="serviceType"]:checked').value;
  let totalPrice = prices[selectedServiceType] * quantity;
}

