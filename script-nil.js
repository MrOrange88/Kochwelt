
function increase_portion() {
  let input = document.getElementById("portion_value");
  let current = Math.max(1, parseInt(input.value, 10));
  if (current < 12) {
    input.value = current + 1;
  }
}

function decrease_portion() {
  let input = document.getElementById("portion_value");
  let current = Math.max(1, parseInt(input.value, 10));
  if (current > 1) {
    input.value = current - 1;
  }
}

function sync_values() {
  let input_value = Math.max(1, parseInt(document.getElementById("portion_value").value, 10));
  document.getElementById("portion_value").value = input_value; // korrigiert direkt im Feld
  document.getElementById("portion").innerHTML = input_value;
}

function sync_ingredient_1() {
  let input = document.getElementById("portion_value").value;
  let current = Math.max(1, parseInt(input, 10));
  let element = document.querySelector(".ingredient_1");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_2() {
  let input = document.getElementById("portion_value").value;
  let current = Math.max(1, parseInt(input, 10));
  let element = document.querySelector(".ingredient_2");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_3() {
  let input = document.getElementById("portion_value").value;
  let current = Math.max(1, parseInt(input, 10));
  let element = document.querySelector(".ingredient_3");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_4() {
  let input = document.getElementById("portion_value").value;
  let current = Math.max(1, parseInt(input, 10));
  let element = document.querySelector(".ingredient_4");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_5() {
  let input = document.getElementById("portion_value").value;
  let current = Math.max(1, parseInt(input, 10));
  let element = document.querySelector(".ingredient_5");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_6() {
  let input = document.getElementById("portion_value").value;
  let current = Math.max(1, parseFloat(input, 10));
  let element = document.querySelector(".ingredient_6");
  let data = element.getAttribute("data-base");
  let data_number = parseFloat(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_7() {
  let input = document.getElementById("portion_value").value;
  let current = Math.max(1, parseInt(input, 10));
  let element = document.querySelector(".ingredient_7");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_8() {
  let input = document.getElementById("portion_value").value;
  let current = Math.max(1, parseInt(input, 10));
  let element = document.querySelector(".ingredient_8");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

