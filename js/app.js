function generatePin() {
  const pin = Math.round(Math.random() * 10000);
  const pinSting = pin + "";
  if (pinSting.length == 4) {
    document.getElementById("generated-pin").value = pin;
  } else {
    generatePin();
  }
}

document.getElementById("keyPad").addEventListener("click", function (event) {
  let input = document.getElementById("inputField");
  const CurrentValue = event.target.innerText;
  const previousValue = input.value;

  if (isNaN(CurrentValue)) {
    if (CurrentValue == "C") {
      input.value = "";
    }
  } else {
    newValue = previousValue + CurrentValue;
    input.value = newValue;
  }
});

document.getElementById("submit").addEventListener("click", function () {
  const pin = document.getElementById("generated-pin").value;
  let typedNumber = document.getElementById("inputField").value;
  const success = document.getElementById("success");
  const fail = document.getElementById("error");
  if (pin == typedNumber) {
    success.style.display = "block";
    fail.style.display = "none";
  } else {
    fail.style.display = "block";
    success.style.display = "none";
  }
  typedNumber.value = "";
});
