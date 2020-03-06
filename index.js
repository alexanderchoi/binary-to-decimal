const button = document.getElementById("submit");
const input = document.getElementById("binaryInput");
const display = document.getElementById("display");

input.addEventListener("keydown", function(e) {
  if (e.keyCode != 48 && e.keyCode != 49 && e.keyCode != 8) {
    e.preventDefault();
  }
});

const binaryToDecimal = input => {
  input = input.split("");
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    input[i] = Number(input[i]);
    if (input[i] === 1) {
      if (i === 0) {
        sum += input[i] * 128;
      } else if (i === 1) {
        sum += input[i] * 64;
      } else if (i === 2) {
        sum += input[i] * 32;
      } else if (i === 3) {
        sum += input[i] * 16;
      } else if (i === 4) {
        sum += input[i] * 8;
      } else if (i === 5) {
        sum += input[i] * 4;
      } else if (i === 6) {
        sum += input[i] * 2;
      } else if (i === 7) {
        sum += input[i] * 1;
      }
    }
  }
  return sum;
};

button.addEventListener("click", function() {
  if (input.value.length === 8) {
    display.innerHTML = binaryToDecimal(input.value);
    input.value = "";
  }
});
