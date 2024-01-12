const boxContainer = document.getElementById("fizzbuzz-row");

for (let i = 1; i <= 100; i++) {
  let boxText = i;
  let boxClass = "box";

  if (i % 15 == 0) {
    boxText = "fizzbuzz";
    boxClass = "fizzbuzz";
  } else if (i % 15 == 5) {
    boxText = "buzz";
    boxClass = "buzz";
  } else if (i % 15 == 3) {
    boxText = "fizz";
    boxClass = "fizz";
  }

  boxContainer.innerHTML += `
  <div class="col">
    <div class="box ${boxClass}">${boxText}</div>
  </div>`;
}
