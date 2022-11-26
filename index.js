const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const lengthRender = document.querySelector("#length-render")
const genBtn = document.querySelector("#gen-btn")
const passwordOne = document.querySelector("#password-one")
const passwordTwo = document.querySelector("#password-two")
const removeLengthBtn = document.querySelector("#remove-length")
const addLengthBtn = document.querySelector("#add-length")
let passwordLength = 35 
let passwordLengthRender = "Length: "
let specialCharactersBtn = document.querySelector("#spe-ch-choice")
specialCharactersBtn.style.color = "#34D399"
let specialCharactersChoice = true
specialCharactersBtn.textContent = "Yes!"
let numbersChoiceBtn = document.querySelector("#numbers-choice")
numbersChoiceBtn.style.color = "#34D399"
let numbersChoice = true
numbersChoiceBtn.textContent = "Yes!"

let justCharacters = characters.slice()
let charactersAndSpecialCharacters = characters.slice().concat(specialCharacters.slice())
let charactersAndNumbers = characters.slice().concat(numbers.slice())
let all = characters.slice().concat(specialCharacters.slice(),numbers.slice())

specialCharactersBtn.addEventListener("click", function() {
    if (specialCharactersChoice === true){
        specialCharactersChoice = false
        if (specialCharactersChoice === false) {
            specialCharactersBtn.style.color = "#FB7185"
        } 
        specialCharactersBtn.textContent = "Nope"
    } else if (specialCharactersChoice === false) {
        specialCharactersChoice = true
        if (specialCharactersChoice === true) {
            specialCharactersBtn.style.color = "#34D399"
        } 
        specialCharactersBtn.textContent = "Yes!"
    }
})
numbersChoiceBtn.addEventListener("click", function() {
    if (numbersChoice === true){
        numbersChoice = false
        if (numbersChoice === false) {
            numbersChoiceBtn.style.color = "#FB7185"
        } 
        numbersChoiceBtn.textContent = "Nope"
    } else if (numbersChoice === false) {
        numbersChoice = true
        if (numbersChoice === true) {
            numbersChoiceBtn.style.color = "#34D399"
        } 
        numbersChoiceBtn.textContent = "Yes!"
    }
})

function generateRandomPassword() {
    resetOnClick()
    if (specialCharactersChoice === true && numbersChoice === false) {
        for (let index = 0; index < passwordLength; index++) {
            let randomCharacters = Math.floor(Math.random() * charactersAndSpecialCharacters.length)
            let randomCharacters2 = Math.floor(Math.random() * charactersAndSpecialCharacters.length)
            passwordOne.textContent += charactersAndSpecialCharacters[randomCharacters]
            passwordTwo.textContent += charactersAndSpecialCharacters[randomCharacters2]
        }
    } else if (specialCharactersChoice === false && numbersChoice === true) {
        for (let index = 0; index < passwordLength; index++) {
            let randomCharacters = Math.floor(Math.random() * charactersAndNumbers.length)
            let randomCharacters2 = Math.floor(Math.random() * charactersAndNumbers.length)
            passwordOne.textContent += charactersAndNumbers[randomCharacters]
            passwordTwo.textContent += charactersAndNumbers[randomCharacters2]
        }
    }  else if (specialCharactersChoice === true && numbersChoice === true) {
        for (let index = 0; index < passwordLength; index++) {
            let randomCharacters = Math.floor(Math.random() * all.length)
            let randomCharacters2 = Math.floor(Math.random() * all.length)
            passwordOne.textContent += all[randomCharacters]
            passwordTwo.textContent += all[randomCharacters2]
        }
    } else if (specialCharactersChoice === false && numbersChoice === false) {
        for (let index = 0; index < passwordLength; index++) {
            let randomCharacters = Math.floor(Math.random() * justCharacters.length)
            let randomCharacters2 = Math.floor(Math.random() * justCharacters.length)
            passwordOne.textContent += justCharacters[randomCharacters]
            passwordTwo.textContent += justCharacters[randomCharacters2]
        } 
    } 
}

function resetOnClick() {
    passwordOne.textContent = " " 
    passwordTwo.textContent = " " 
}
removeLengthBtn.addEventListener("click",function () {
    passwordLength -= 1
    lengthRender.textContent = passwordLengthRender + passwordLength
})
addLengthBtn.addEventListener("click",function () {
    passwordLength += 1
    lengthRender.textContent = passwordLengthRender + passwordLength
})


lengthRender.textContent = passwordLengthRender + passwordLength



