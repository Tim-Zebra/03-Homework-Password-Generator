// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// The above listens for a click, then obtains a password and assigns the value of that password to the <textarea>
//need a function that generates a password based on the criteria ()
function generatePassword() {
// Need a series of prompts asking for password criteria. User can select these criteria
// Prompted Criteria: lowercase, uppercase, numeric, and/or special chacters
// A prompted criteria must include length between 8-128 characters 
// When a criteria is selected, the input must be validated "Will include lowercase" "Not including lowercase"
// Then password is generated based off of the prompts

// .confirm() alerts for each criteria

// prompt values are booleans

// If all criteria (not including character) = false display alert "Must select Criteria. Please select Generate again" return;

// while loop that checks if charcter limit selected is between 8-128



// password is generated appliyng the boolean statements
}