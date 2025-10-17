function increasePortion() {
  let input = document.getElementById("portion-value");
  let current = Math.max(1, parseInt(input.value, 10));
  if (current < 12) {
    input.value = current + 1;
  }
}

function decreasePortion() {
  let input = document.getElementById("portion-value");
  let current = Math.max(1, parseInt(input.value, 10));
  if (current > 1) {
    input.value = current - 1;
  }
}

function syncValues() {
  let input_value = Math.max(1, parseInt(document.getElementById("portion-value").value, 10));
  document.getElementById("portion-value").value = input_value;
  document.getElementById("portion").innerHTML = input_value;
}

function syncIngredient(ingredient) {
  let input = document.getElementById("portion-value").value;
  let current = Math.max(1, parseFloat(input));
  let element = document.querySelector(ingredient);
  let data = element.getAttribute("data-base");
  let data_number = parseFloat(data);
  let result = current * data_number;
  element.textContent = result;
}


function printRecipe() {
    window.print();  
}
