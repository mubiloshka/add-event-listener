const input = document.getElementById("input");
const sendBtn = document.getElementById("sendbtn");
const value = document.getElementById("tsifra"); 
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const vibor = document.getElementById("vibor");

let tsifraseychas = 7;

function updateDisplay() {
  value.textContent = tsifraseychas;
}

sendBtn.addEventListener("click", () => {
  const noviy = parseInt(input.value);
  if (!isNaN(noviy)) {
    tsifraseychas = noviy;
    updateDisplay();
  }
});

plus.addEventListener("click", () => {
  tsifraseychas++;
  updateDisplay();
});

minus.addEventListener("click", () => {
  tsifraseychas--;
  updateDisplay();
});

vibor.addEventListener("input", () => {
  value.style.color = vibor.value;
});
