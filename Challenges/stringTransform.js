
/**
 * Transforms a string based on its length. If the length is divisible by 15,
 * it reverses the string and then replaces each character with its ASCII code. 
 * If divisible by 3 only, it reverses the string. 
 * If divisible by 5 only, it replaces each character with its ASCII code.
 * 
 * @param {string} str - The string to transform
 * @returns {string} - The transformed string
 */
const stringTransformation = (str) => {
  const length = str.length;

  if (length % 3 == 0 && length % 5 == 0) {
    // reverse then ascii
    let reversedString = reverseString(str);
    let res = charCodes(reversedString);
    return res;
  } else if (length % 3 == 0) {
    // Reverse the string
    let reversedString = reverseString(str);
    return reversedString;
  } else if (length % 5 == 0) {
	  // Ascii
    let res = charCodes(str);
    return res;
  }
};

/**
 * Reverses the input string.
 * 
 * @param {string} str - The string to reverse
 * @returns {string} - The reversed string
 */
const reverseString = (str) => {
  let reversedString = "";
  for(let i = str.length - 1; i >= 0; i--){
    reversedString += str[i];
  }
  return reversedString
}

/**
 * Converts each character of a string to its ASCII code and returns a space-separated string of these codes.
 * 
 * @param {string} str - The string to convert
 * @returns {string} - A string of ASCII codes
 */
const charCodes = (str) => {
  let strArr = str.split('');
  res = strArr.map(char => char.charCodeAt(0)).join(' ');
  return res;
}

// Testing
console.log(stringTransformation("Hamburger"))
console.log(stringTransformation("Pizza")); 
console.log(stringTransformation("Chocolate Chip Cookie")); 