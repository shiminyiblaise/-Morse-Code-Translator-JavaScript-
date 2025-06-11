const morseCodeMap = {
  A: ".-",     B: "-...",   C: "-.-.",
  D: "-..",    E: ".",      F: "..-.",
  G: "--.",    H: "....",   I: "..",
  J: ".---",   K: "-.-",    L: ".-..",
  M: "--",     N: "-.",     O: "---",
  P: ".--.",   Q: "--.-",   R: ".-.",
  S: "...",    T: "-",      U: "..-",
  V: "...-",   W: ".--",    X: "-..-",
  Y: "-.--",   Z: "--..",
  0: "-----",  1: ".----",  2: "..---",
  3: "...--",  4: "....-",  5: ".....",
  6: "-....",  7: "--...",  8: "---..",
  9: "----.",
  " ": "/",    ".": ".-.-.-", ",": "--..--",
  "?": "..--..", "'": ".----.", "!": "-.-.--"
};

function translateToMorse() {
  const input = document.getElementById("text-input").value.toUpperCase();
  let output = "";

  for (let char of input) {
    if (morseCodeMap[char]) {
      output += morseCodeMap[char] + " ";
    } else {
      output += "[?] "; // Unknown character
    }
  }

  document.getElementById("morse-output").textContent = output.trim();
}
function translateToText() {
  const input = document.getElementById("morse-input").value.trim();
  const morseWords = input.split(" / ");
  let output = "";

  for (let word of morseWords) {
    const morseChars = word.split(" ");
    for (let morseChar of morseChars) {
      const char = Object.keys(morseCodeMap).find(key => morseCodeMap[key] === morseChar);
      output += char ? char : "?"; // Unknown Morse code
    }
    output += " "; // Space between words
  }

  document.getElementById("text-output").textContent = output.trim();
};
// Event listeners for buttons
document.getElementById("to-morse-btn").addEventListener("click", translateToMorse);    



// Reverse lookup: Morse → Letter
const textFromMorseMap = Object.entries(morseCodeMap).reduce((acc, [char, code]) => {
  acc[code] = char;
  return acc;
}, {});

function translateToText() {
  const input = document.getElementById("morse-input").value.trim();
  const words = input.split(" / "); // Morse words separated by slashes
  let result = "";

  for (let word of words) {
    const letters = word.trim().split(" ");
    for (let morseLetter of letters) {
      if (textFromMorseMap[morseLetter]) {
        result += textFromMorseMap[morseLetter];
      } else {
        result += "?"; // Unknown
      }
    }
    result += " "; // Space between words
  }

  document.getElementById("text-output").textContent = result.trim();
}
document.getElementById("to-text-btn").addEventListener("click", translateToText);
// Event listeners for buttons


