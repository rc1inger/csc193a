/*
 * Starter file 
 */
(function() {
    "use strict";
  
    /**
     * The starting point in our program, setting up a listener
     * for the "load" event on the window, signalling the HTML DOM has been constructed
     * on the page. When this event occurs, the attached function (init) will be called.
     */
    // part 1 done
    window.addEventListener("load", init);

    /**
     * TODO: Write a function comment using JSDoc.
     */
    function init() {
        // Note: In this function, we usually want to set up our event handlers
        // for UI elements on the page.

        // part 2 handleClick
        const encryptButton = document.getElementById("encrypt-it");
        encryptButton.addEventListener("click", handleClick);

        // part 3 reset button
        const resetButton = document.getElementById("reset");
        resetButton.addEventListener("click", handleReset);
    }
  
    function handleReset() {
        document.getElementById("input-text").value = ""; // Clear input text
        document.getElementById("result").textContent = ""; // Clear result
        console.log("Reset button clicked!");
    }

    function handleClick() {
        const inputText = document.getElementById("input-text").value;
        const encryptedText = shiftCipher(inputText);
        document.getElementById("result").textContent = encryptedText;
        console.log("Text encrypted!");
      }

    // part 4 cipher
  /**
   * Applies a basic shift cipher to the input text.
   * @param {string} text - The text to be encrypted.
   * @return {string} The encrypted text.
   */
  function shiftCipher(text) {
      text = text.toLowerCase(); // Treat uppercase and lowercase letters the same
      let result = "";
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char >= 'a' && char <= 'z') {
          // Shift alpha characters
          if (char === 'z') {
            result += 'a'; // Wrap 'z' to 'a'
          } else {
            result += String.fromCharCode(char.charCodeAt(0) + 1);
          }
        } else {
          // Non-alphabetic characters remain unchanged
          result += char;
       }
    }
    return result;
  }
      
})();
  