const encode_dict = {
    "a": "\\/",
    "b": "(.",
    "c": ")o",
    "d": "\\(",
    "e": "o/",
    "f": "))",
    "g": "o(",
    "h": "oo",
    "i": "o.",
    "j": "((",
    "k": "o)",
    "l": "(o",
    "m": "oO",
    "n": "/)",
    "o": "/O",
    "p": "()",
    "q": ".)",
    "r": ")\\",
    "s": "\\.",
    "t": "(O",
    "u": "/.",
    "v": ")(",
    "w": "/\\",
    "x": ".\\",
    "y": "O)",
    "z": "O/",
    "1": "/o",
    "2": "Oo",
    "3": "..",
    "4": "O(",
    "5": "/(",
    "6": "\\O",
    "7": ".o",
    "8": ".(",
    "9": "\\\\",
    "0": "\\o",
    "!": "(/",
    "?": "O.",
    "\"": "OO",
    "'": "o\\",
    " ": "_",
    ".": ":"
}

const decode_dict = {
    "\\/": "a",
    "(.": "b",
    ")o": "c",
    "\\(": "d",
    "o/": "e",
    "))": "f",
    "o(": "g",
    "oo": "h",
    "o.": "i",
    "((": "j",
    "o)": "k",
    "(o": "l",
    "oO": "m",
    "/)": "n",
    "/O": "o",
    "()": "p",
    ".)": "q",
    ")\\": "r",
    "\\.": "s",
    "(O": "t",
    "/.": "u",
    ")(": "v",
    "/\\": "w",
    ".\\": "x",
    "O)": "y",
    "O/": "z",
    "/o": "1",
    "Oo": "2",
    "..": "3",
    "O(": "4",
    "/(": "5",
    "\\O": "6",
    ".o": "7",
    ".(": "8",
    "\\\\": "9",
    "\\o": "0",
    "(/": "!",
    "O.": "?",
    "OO": "\"",
    "o\\": "'",
    "_": " ",
    ":": "."
};

function decode() {
    const user_message = document.getElementById('userInput').value;
    let decoded_message = "";
    let current_letter = "";

    for (const char of user_message) {
        current_letter += char;

        // Check if the current collected characters form a valid value
        if (Object.values(encode_dict).includes(current_letter)) {
            const letter_key = Object.keys(encode_dict).find(
                key => encode_dict[key] === current_letter
            );

            decoded_message += letter_key.toUpperCase();
            current_letter = "";
        }
    }

	document.getElementById('result').innerText = decoded_message;
}

function encode() {
    const user_message = document.getElementById('userInput').value.toLowerCase();
    let encoded_message = "";

    for (const char of user_message) {
        encoded_message += encode_dict[char];
    }

	document.getElementById('result').innerText = encoded_message;
}

// Add event listener to call perform from an HTML button
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('encodeButton');
  if (button) {
      button.addEventListener('click', encode);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const decodeButton = document.getElementById('decodeButton');
  if (decodeButton) {
      decodeButton.addEventListener('click', decode);
  }
});