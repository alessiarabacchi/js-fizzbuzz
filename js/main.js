const boxContainer = document.getElementById("box-container");

for (let i = 1; i <= 100; i++) {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");
  boxElement.innerHTML = `
        <div class="card">
            <div class="card-body">
                ${i}
            </div>
        </div>
    `;
  boxContainer.append(boxElement);
}
