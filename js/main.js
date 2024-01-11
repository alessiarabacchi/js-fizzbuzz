const boxContainer = document.getElementById("box-container");

for (let i = 1; i <= 100; i++) {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");
  boxElement.innerHTML = `
        <div class="card bg-primary p-5 m-5 ">
            <div class="card-body">
                ${i}
            </div>
        </div>
    `;

  // Funzione per verificare se un numero è multiplo di un altro
  function isMultiple(num, divisor) {
    return num % divisor === 0;
  }

  // Ciclo da 1 a 100
  for (let i = 1; i <= 100; i++) {
    let output = "";

    // Verifica se il numero è multiplo di 3
    if (isMultiple(i, 3)) {
      output += "Fizz";
    }

    // Verifica se il numero è multiplo di 5
    if (isMultiple(i, 5)) {
      output += "Buzz";
    }

    // Se il numero non è multiplo né di 3 né di 5, stampa il numero stesso
    if (output === "") {
      output = i;
    }

    // Creazione e aggiunta di un elemento HTML al DOM

    const element = document.createElement("div");
    element.textContent = output;
    element.className = output === i ? "number" : output.toLowerCase();
    document.body.appendChild(element);
  }
  boxContainer.append(boxElement);
}
