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

//Generates a Password
function generatePassword() {
  // Boolean variables that determine if a specific type of character should be used in password generation. Set to the default "off"
  var lowerBoolean = false;
  var upperBoolean = false;
  var numberBoolean = false;
  var specialBoolean = false;

  // User input confirming character types to include and storing the response: 
  lowerBoolean = window.confirm("Do you want lowercase chacaters in password?")
  upperBoolean = window.confirm("Do you want uppercase chacaters in password?")
  numberBoolean = window.confirm("Do you want number chacaters in password?")
  specialBoolean = window.confirm("Do you want special chacaters in password?")

  // If all criteria (not including character) = false display alert "Must select Criteria. Please select Generate again" return;
  if(!lowerBoolean && !upperBoolean && !numberBoolean && !specialBoolean) {
    window.alert("Must select at least one criteria. Please select 'Generate Password' to try again.");
    return;
  }

  // prompts for how many characters and stores that value
  var charNumber = 0;
  charNumber = window.prompt("How many characters would you like your password to be?\n Please enter any whole number value between 8-128:");


  // Password and character variables
  var password = '';
  var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialString = "!@#$%^&*" 

  // Adds Prompt variables in random order
  // Continues while the password length is not met
  while (password.length < charNumber)
  {
    // Randomly selects between all four password variable options, taking into account user's confirmations
    var randomSelector = Math.floor(Math.random() * 4);
    if(randomSelector === 0 && lowerBoolean) {
      password += lowerCaseString[Math.floor(Math.random()*lowerCaseString.length)];
    }
    else if(randomSelector === 1 && upperBoolean) {
      password += upperCaseString[Math.floor(Math.random()*upperCaseString.length)];
    }
    else if(randomSelector === 2 && numberBoolean) {
      password += Math.floor(Math.random()*10);
    }
    else if(randomSelector === 3 && specialBoolean) {
      password += specialString[Math.floor(Math.random()*specialString.length)];
    }
    console.log(password);
  }


}