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
// A prompted criteria must include length between 8-128 characters 
// When a criteria is selected, the input must be validated "Will include lowercase" "Not including lowercase"
// Then password is generated based off of the prompts

// Prompt Variables: lowercase, uppercase, numeric, and/or special chacters
/* var lowerBoolean = false;
var upperBoolean = false;
var numberBoolean = false;
var specialBoolean = false; */

// User input confirming character types to include and storing the response: 
/* lowerBoolean = window.confirm("Do you want lowercase chacaters in password?")
upperBoolean = window.confirm("Do you want uppercase chacaters in password?")
numberBoolean = window.confirm("Do you want number chacaters in password?")
specialBoolean = window.confirm("Do you want special chacaters in password?") */

// If all criteria (not including character) = false display alert "Must select Criteria. Please select Generate again" return;
/* if(!lowerBoolean && !upperBoolean && !numberBoolean && !specialBoolean) {
  window.alert("Must select at least one criteria. Please select 'Generate Password' to try again.");
  return;
} */

// prompts for how many characters and stores that value
var charNumber = 0;
charNumber = window.prompt("How many characters would you like your password to be?\n Please enter any whole number value between 8-128:");






// password is generated appliyng the boolean statements
}