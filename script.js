const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
  const text = textInput.value.toLowerCase().replace(/[^a-z0-9]/gi, "");

  result.textContent = ""; // Clear the result paragraph

  if (text.trim() === "") {
    alert("Please input a value");
    return; // Exit the function if no input
  } else {
    // Palindrome checking logic here...

    // Update the result paragraph
    result.textContent = "Please enter a value to check.";
  }
};
