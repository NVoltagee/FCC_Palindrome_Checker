const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (input) => {
  const initialInput = input;
  if (input === "") {
    alert("Please input a value");
    return;
  }
};

button.addEventListener("click", () => {
  checkPalindrome(input.value);
});
