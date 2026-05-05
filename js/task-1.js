function isEnoughCapacity(products, containerSize) {
  // отримуємо всі значення (кількість товарів)
  const values = Object.values(products);
  
  // рахуємо загальну кількість
  const total = values.reduce((sum, item) => sum + item, 0);
  
  // перевіряємо, чи вистачає місця
  return total <= containerSize;
}

// Перевірка (залишити як є)
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false