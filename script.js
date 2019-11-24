// Prompts for user to select what sort of password they would like to gnerate

var passLength = prompt("How many characters would you like your password to be? Must be between 8 and 128.")
var charTypeSpec = confirm("Would you like special characters?")
var charTypeNum = confirm("Would you like numeric characters?")
var charTypeLower = confirm("Would you like lowercase characters?")
var charTypeUpper = confirm("Would you like uppercase characters?")

// Varibles for buttons

var generateBtn = document.querySelector("#gen")
var copyBtn = document.querySelector("#copy")
var passwordBox = document.querySelector("#pass-final")

// Initial varibales with different sets of characters to select from

var specialChars = " !\"/#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numChars = "0123456789"
var lowerChars = "abcdefghijklmnopqrstuvwxyz"
var upperChars = lowerChars.toUpperCase()

var charListFinal = ""

// Helper function to make final character list to select from for password generation and then returns the completed list

var generateFinalCharList = function () {
    if (charTypeSpec === true) {
        charListFinal += specialChars
    }
    if (charTypeNum === true) {
        charListFinal += numChars
    }
    if (charTypeLower === true) {
        charListFinal += lowerChars
    }
    if (charTypeUpper === true) {
        charListFinal += upperChars
    }
    return charListFinal
}

// Function to generate a random password and place password into password div

var generatePass = function () {
    // event.preventDefault()
    var pass = ""
    var charList = generateFinalCharList()
    for (var i = 0; i < passLength; i ++) {
        pass += charList[Math.floor(Math.random() * charList.length)]
    }
    passwordBox.textContent = pass
}

// Copy generated password to the clipboard

var copyText = function () {
    var copyText = document.getElementById("pass-final");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    alert("Your generated password has been copied to the clipboard!")
    textArea.remove();
   }

// When buttons are clicked event listeners

generateBtn.addEventListener("click", generatePass)
copyBtn.addEventListener("click" , copyText)


