// const TypeWriter = function (txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };
// // Type Method
// TypeWriter.prototype.type = function () {
//   const current = this.wordIndex % this.words.length;
//   // Get full text of current word
//   const fullTxt = this.words[current];
//   //Initial Type Speed
//   let typeSpeed = 300;
//   // Check deleting
//   if (this.isDeleting) {
//     typeSpeed /= 2;
//     // Remove char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }
//   // console.log(this.txt);
//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}<span>`;
//   if (!this.isDeleting && this.txt === fullTxt) {
//     // MAke Pause at end
//     typeSpeed = this.wait;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     // Move To The Next Word
//     this.wordIndex++;
//     // Pause Before start
//     typeSpeed = 700;
//   }
//   setTimeout(() => this.type(), typeSpeed);
// };

// INit on DOM load
document.addEventListener("DOMContentLoaded", init);
// init app
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init Type Writer;
  new TypeWriter(txtElement, words, wait);
  console.log(words);
}

// ES6 class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    //Initial Type Speed
    let typeSpeed = 300;
    // Check deleting
    if (this.isDeleting) {
      typeSpeed /= 2;
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // console.log(this.txt);
    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}<span>`;
    if (!this.isDeleting && this.txt === fullTxt) {
      // MAke Pause at end
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move To The Next Word
      this.wordIndex++;
      // Pause Before start
      typeSpeed = 700;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}
