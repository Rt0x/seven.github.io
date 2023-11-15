// Получение ссылок на элементы формы
const quantityInput = document.getElementById('quantity');
const serviceTypeInputs = document.getElementsByName('serviceType');
const productOptionSelect = document.getElementById('productOption');
const productPropertyCheckbox = document.getElementById('productProperty');
const priceOutput = document.getElementById('price');

// Функция для пересчета цены
function calculatePrice() {
  // Получение выбранных значений
  const quantity = parseInt(quantityInput.value);
  const serviceType = document.querySelector('input[name="serviceType"]:checked').value;
  const productOption = productOptionSelect.value;
  const productProperty = productPropertyCheckbox.checked;

  // Выполнение расчетов
  let basePrice = 0;
  switch (serviceType) {
    case 'basic':
      basePrice = 100;
      break;
    case 'standard':
      basePrice = 0;
      break;
  }

  let optionPrice = 0;
  switch (productOption) {
    case 'option1':
      optionPrice = 150;
      break;
    case 'option2':
      optionPrice = 100;
      break;
    case 'option3':
      optionPrice = 200;
      break;
      case 'option4':
      optionPrice = 50;
      break;
    case 'option5':
      optionPrice = 170;
      break;
    case 'option6':
      optionPrice = 70;
      break;
      case 'option7':
      optionPrice = 90;
      break;
    case 'option8':
      optionPrice = 150;
      break;
   
  }

  let propertyPrice = productProperty ? 150 : 0;

  const totalPrice = (basePrice + optionPrice + propertyPrice) * quantity;

  // Обновление вывода цены
  priceOutput.textContent = totalPrice;
}
