const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genPasswordOne = document.querySelector("#gen-password-one")
let genPasswordTwo = document.querySelector("#gen-password-two")

function generatePassword() {
    resetOnClick()
    for (let index = 0; index < 15; index++) {
        let randomCharater = Math.floor(Math.random() * characters.length)
        genPasswordOne.textContent += characters[randomCharater]
        let randomCharater2 = Math.floor(Math.random() * characters.length)
        genPasswordTwo.textContent += characters[randomCharater2]
    }
    }

function resetOnClick() {
    genPasswordOne.textContent = ""
    genPasswordTwo.textContent = ""
}