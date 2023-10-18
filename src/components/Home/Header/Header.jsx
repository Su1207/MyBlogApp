import React from "react";
import NavBar from "../../Navbar/Navbar";
import "./style.css";

const Header = ({ user, handleLogout }) => {
  return (
    <header className="home-header">
      <NavBar user={user} handleLogout={handleLogout} />
      <h2>Insightful and Valuable</h2>
      <h1>
        <span>"</span>Blog<span>"</span>
      </h1>
      <p id="para">
        awesome place to make oneself <br /> productive and entertained through
        daily updates
      </p>
    </header>
  );
};

// const p = document.getElementById("para");
// const phrases =
//   "awesome place to make oneself <br /> productive and entertained through daily updates.";

// let letterIndex = 0;
// const typingSpeed = 100;
// const erasingSpeed = 75;

// //printing letter of the word one by one
// function printLetter(phrase) {
//   if (letterIndex === phrase.length) {
//     //this is the time to clear the text
//     clearLetter();
//   } else if (letterIndex < phrase.length) {
//     p.textContent += phrase.charAt(letterIndex);
//     letterIndex += 1;
//     setTimeout(function () {
//       printLetter(phrase);
//     }, typingSpeed);
//   }
// }

// function clearLetter() {
//   if (letterIndex === -1) {
//     letterIndex = 0;
//     printLetter(phrases);
//   } else if (letterIndex > -1) {
//     let updatedPhrase = "";
//     for (let index = 0; index < letterIndex; index++) {
//       updatedPhrase += phrases.charAt(index);
//     }
//     // console.log(updatedPhrase)
//     p.textContent = updatedPhrase;
//     letterIndex -= 1;
//     setTimeout(clearLetter, erasingSpeed);
//   }
// }

// printLetter(phrases);

export default Header;
