const p = "";
const phrases = [
  "awesome place to make oneself <br /> productive and entertained through daily updates.",
];

let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 75;

//printing letter of the word one by one
function printLetter(phrase) {
  if (letterIndex == phrase.length) {
    //this is the time to clear the text
    clearLetter();
  } else if (letterIndex < phrase.length) {
    p.textContent += phrase.charAt(letterIndex);
    letterIndex += 1;
    setTimeout(function () {
      printLetter(phrase);
    }, typingSpeed);
  }
}

function clearLetter() {
  if (letterIndex == -1) {
    phraseIndex = (phraseIndex + 1) % phrases.length; //for creating loop in array
    letterIndex = 0;
    printLetter(phrases[phraseIndex]);
  } else if (letterIndex > -1) {
    let updatedPhrase = "";
    for (let index = 0; index < letterIndex; index++) {
      updatedPhrase += phrases[phraseIndex].charAt(index);
    }
    // console.log(updatedPhrase)
    p.textContent = updatedPhrase;
    letterIndex -= 1;
    setTimeout(clearLetter, erasingSpeed);
  }
}

printLetter(phrases[phraseIndex]);
