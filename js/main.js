const boxContainer = document.getElementById("fizzbuzz-row");

for (let i = 1; i <= 100; i++) {
  let boxText = i;
  let boxClass = "box";

  if (i % 15 == 0) {
    boxText = "fizzbuzz";
    boxClass = "fizzbuzz";
  } else if (i % 5 == 0) {
    boxText = "buzz";
    boxClass = "buzz";
  } else if (i % 3 == 0) {
    boxText = "fizz";
    boxClass = "fizz";
  }

  boxContainer.innerHTML += `
  <div class="col">
    <div class="box ${boxClass}">${boxText}</div>
  </div>`;
}
