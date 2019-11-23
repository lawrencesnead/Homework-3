var passLength = prompt("How many characters would you like your password to be? Must be between 8 and 128.")
var charTypeSpec = confirm("Would you like special characters?")
var charTypeNum = confirm("Would you like numeric characters?")
var charTypeLower = confirm("Would you like lowercase characters?")
var charTypeUpper = confirm("Would you like uppercase characters?")

var generateBtn = document.querySelector("#gen")
var copyBtn = document.querySelector("#copy")
var passwordBox = document.querySelector("#pass-final")

var specialChars = " !\"/#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numChars = "0123456789"
var lowerChars = "abcdefghijklmnopqrstuvwxyz"
var upperChars = lowerChars.toUpperCase()

var charListFinal = ""
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



var generatePass = function () {
    // event.preventDefault()
    var pass = ""
    var charList = generateFinalCharList()
    for (var i = 0; i < passLength; i ++) {
        pass += charList[Math.floor(Math.random() * charList.length)]
    }
    passwordBox.textContent = pass
}

function copyText(){
    passwordBox.textContent.select()
    document.execCommand('copy')
   }

generateBtn.addEventListener("click" , generatePass())
copyBtn.addEventListener("click" , copyText())


