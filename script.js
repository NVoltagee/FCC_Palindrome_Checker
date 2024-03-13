const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (input) => {
  const initialInput = input;
  if (input === "") {
    alert("Please input a value");
    return;
  }

  // Remove the previous result
  result.replaceChildren();

  const lowercaseInput = input.toLowerCase();

  const reversedInput = lowercaseInput.split("").reverse().join("");

  // Check if the reversed input is equal to the original input
  if (lowercaseInput === reversedInput) {
    result.textContent = `${input} is a palindrome`;
  } else {
    result.textContent = `${input} is not a palindrome`;
  }

  // Show the result.
  result.classList.remove("hidden");
};

button.addEventListener("click", () => {
  checkPalindrome(input.value);
});
