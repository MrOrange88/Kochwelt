
function increase_portion() {
  // Holt das Input-Feld mit der ID "portion_value"
  let input = document.getElementById("portion_value");

  // Wandelt den aktuellen Wert im Feld in eine Ganzzahl um
  let current = parseInt(input.value, 10);

  // Falls der Wert keine Zahl ist, wird er auf 1 gesetzt
  if (isNaN(current)) current = 1;

  // Erhöht den Wert um 1, solange er unter dem Maximalwert liegt
  if (current < 12) {
    input.value = current + 1;
  }
}


function decrease_portion() {
  // Holt das Input-Feld mit der ID "portion_value"
  let input = document.getElementById("portion_value");

  // Wandelt den aktuellen Wert im Feld in eine Ganzzahl um
  let current = parseInt(input.value, 10);

  // Falls der Wert keine Zahl ist, wird er auf 1 gesetzt
  if (isNaN(current)) current = 1;

  // Verringert den Wert um 1, solange er über dem Minimalwert liegt
  if (current > 1) {
    input.value = current - 1;
  }
}


function sync_values() {
  // Holt den aktuellen Wert aus dem Eingabefeld mit der ID "portion_value"
  let input_value = document.getElementById("portion_value").value;

  // Setzt den Wert als Inhalt des Elements mit der ID "portion"
  // (zeigt z. B. im Text "Für 2 Portion(en)")
  document.getElementById("portion").innerHTML = input_value;
}

function sync_ingredient_1() {
  // Holt den aktuellen Wert aus dem Input-Feld mit der ID "portion_value"
  let input = document.getElementById("portion_value").value;

  // Wandelt den Eingabewert (String) in eine Ganzzahl (Dezimal) um
  let current = parseInt(input, 10);

  // Wählt das erste Element mit der Klasse "ingredient" aus
  let element = document.querySelector(".ingredient_1");

  // Liest den Basiswert aus dem data-base Attribut des Elements
  let data = element.getAttribute("data-base");

  // Wandelt den Basiswert (String) in eine Ganzzahl um
  let data_number = parseInt(data, 10);

  // Multipliziert die aktuelle Portionsanzahl mit dem Basiswert
  let result = current * data_number;

  // Setzt den berechneten Wert als Textinhalt des Elements
  element.textContent = result;
}

function sync_ingredient_2() {
  let input = document.getElementById("portion_value").value;
  let current = parseInt(input, 10);
  let element = document.querySelector(".ingredient_2");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_3() {
  let input = document.getElementById("portion_value").value;
  let current = parseInt(input, 10);
  let element = document.querySelector(".ingredient_3");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_4() {
  let input = document.getElementById("portion_value").value;
  let current = parseInt(input, 10);
  let element = document.querySelector(".ingredient_4");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_5() {
  let input = document.getElementById("portion_value").value;
  let current = parseInt(input, 10);
  let element = document.querySelector(".ingredient_5");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_6() {
  let input = document.getElementById("portion_value").value;
  let current = parseInt(input, 10);
  let element = document.querySelector(".ingredient_6");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_7() {
  let input = document.getElementById("portion_value").value;
  let current = parseInt(input, 10);
  let element = document.querySelector(".ingredient_7");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}

function sync_ingredient_8() {
  let input = document.getElementById("portion_value").value;
  let current = parseInt(input, 10);
  let element = document.querySelector(".ingredient_8");
  let data = element.getAttribute("data-base");
  let data_number = parseInt(data, 10);
  let result = current * data_number;
  element.textContent = result;
}
