let text = "";
const inputBox = document.querySelector("input");
const buttons = document.querySelectorAll(".buttons");
console.log(buttons[5]);
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      text = eval(text);
      inputBox.value = text;
    } else if (e.target.innerHTML == "CE" || e.target.innerHTML == "ON") {
      text = "";
      inputBox.value = text;
    } else if (e.target.innerHTML == "√") {
      text = Math.sqrt(inputBox.value);
      inputBox.value = text;
    } else {
      text = text + e.target.innerHTML;
      console.log(typeof e.target.innerHTML);
      inputBox.value = text;
    }
  });
});
