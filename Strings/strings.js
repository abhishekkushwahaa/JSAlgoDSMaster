// String Basics:
// 1. String is a primitive data type in JS
// 2. Strings are immutable
// 3. Strings are indexed
// 4. Strings are iterable
// 5. Strings are a sequence of characters

// String Declaration:
// Using single quotes
let str = "Hello World";
console.log(str); // Output: Hello World

// String Manipulation:

// 1. String Concatenation:
// With Build in String Methods
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2; // Concatenation
console.log(result); // Output: Hello World

// Without Build in String Methods
function concatenateStrings(str1, str2) {
  let result = "";
  for (let char of str1) {
    result += char;
  }
  for (let char of str2) {
    result += char;
  }
  return result;
}
console.log(concatenateStrings("Hello", "World")); // Output: HelloWorld

// 2. String Interpolation:
// With Build in String Methods
let str3 = "Hello";
let str4 = "World";
let result1 = `${str3} ${str4}`; // Interpolation

// Without Build in String Methods
function interpolateStrings(str3, str4) {
  let result = "";
  for (let char of str3) {
    result += char;
  }
  for (let char of str4) {
    result += char;
  }
  return result;
}
console.log(interpolateStrings("Hello", "World")); // Output: HelloWorld

// Difference between Concatenation and Interpolation:
// Concatenation is the process of appending one string to the end of another string.
// Interpolation is the process of inserting a string into another string.

// 3. String Reversal:
// With Build in String Methods
let str5 = "Hello";
log(str5.split("").reverse().join("")); // Output: olleH

// Without Build in String Methods
function reverseString(str5) {
  let result = "";
  for (let char of str5) {
    result = char + result;
  }
  return result;
}
console.log(reverseString("Hello")); // Output: olleH

// 4. String Substring:
// With Build in String Methods
let str6 = "Hello World";
console.log(str6.substring(0, 5)); // Output: Hello

// Without Build in String Methods
function substringString(str6, start, end) {
  let result = "";
  for (let i = start; i < end; i++) {
    result += str6[i];
  }
  return result;
}
console.log(substringString("Hello World", 0, 5)); // Output: Hello

// 5. String Length:
// With Build in String Methods
let str7 = "Hello World";
console.log(str7.length); // Output: 11

// Without Build in String Methods
function stringLength(str7) {
  let count = 0;
  for (let char of str7) {
    count++;
  }
  return count;
}
console.log(stringLength("Hello World")); // Output: 11

// 6. String Searching:
// With Build in String Methods
let str8 = "Hello World";
console.log(str8.indexOf("World")); // Output: 6

// Without Build in String Methods
function stringSearching(str8, target) {
  for (let i = 0; i < str8.length; i++) {
    let substring = str8.substring(i, i + target.length);
    if (substring === target) {
      return i;
    }
  }
  return -1;
}
console.log(stringSearching("Hello World", "World")); // Output: 6

// 7. String Splitting:
// With Build in String Methods
let str9 = "Hello World";
console.log(str9.split(" ")); // Output: ["Hello", "World"]

// Without Build in String Methods
function stringSplitting(str9, target) {
  let result = [];
  let current = "";
  for (let char of str9) {
    if (char === target) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}
console.log(stringSplitting("Hello World", " ")); // Output: ["Hello", "World"]

// 8. String Trimming:
// With Build in String Methods
let str10 = " Hello World ";
console.log(str10.trim()); // Output: Hello World

// Without Build in String Methods
function stringTrimming(str10) {
  let result = "";
  let start = 0;
  let end = str10.length - 1;
  while (str10[start] === " ") {
    start++;
  }
  while (str10[end] === " ") {
    end--;
  }
  for (let i = start; i <= end; i++) {
    result += str10[i];
  }
  return result;
}
console.log(stringTrimming(" Hello World ")); // Output: Hello World

// 9. String Replacing:
// With Build in String Methods
let str11 = "Hello World";
console.log(str11.replace("World", "JavaScript")); // Output: Hello JavaScript

// Without Build in String Methods
function stringReplacing(str11, target, replacement) {
  let result = "";
  for (let i = 0; i < str11.length; i++) {
    let substring = str11.substring(i, i + target.length);
    if (substring === target) {
      result += replacement;
      i += target.length - 1;
    } else {
      result += str11[i];
    }
  }
  return result;
}
console.log(stringReplacing("Hello World", "World", "JavaScript")); // Output: Hello JavaScript

// 10. String Repeating:
// With Build in String Methods
let str12 = "Hello";
console.log(str12.repeat(3)); // Output: HelloHelloHello

// Without Build in String Methods
function stringRepeating(str12, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str12;
  }
  return result;
}
console.log(stringRepeating("Hello", 3)); // Output: HelloHelloHello

// 11. String Inducing:
// With Build in String Methods
let str13 = "Hello World";
console.log(str13.includes("World")); // Output: true

// Without Build in String Methods
function stringInducing(str13, target) {
  for (let i = 0; i < str13.length; i++) {
    let substring = str13.substring(i, i + target.length);
    if (substring === target) {
      return true;
    }
  }
  return false;
}
console.log(stringInducing("Hello World", "World")); // Output: true

// 12. String Compare:
// With Build in String Methods
let str14 = "Hello World";
console.log(str14.localeCompare("Hello World")); // Output: 0

// Without Build in String Methods
function stringCompare(str14, target) {
  if (str14.length !== target.length) {
    return false;
  }
  for (let i = 0; i < str14.length; i++) {
    if (str14[i] !== target[i]) {
      return false;
    }
  }
  return true;
}
console.log(stringCompare("Hello World", "Hello World")); // Output: true

// 13. String Case Changing:
// With Build in String Methods
let str15 = "Hello World";
console.log(str15.toLowerCase()); // Output: hello world
console.log(str15.toUpperCase()); // Output: HELLO WORLD

// Without Build in String Methods
function stringCaseChanging(str15) {
  let result = "";
  for (let char of str15) {
    if (char >= "a" && char <= "z") {
      result += String.fromCharCode(char.charCodeAt(0) - 32);
    } else {
      result += char;
    }
  }
  return result;
}
console.log(stringCaseChanging("Hello World")); // Output: HELLO WORLD

// 14. String Character Checking:
// With Build in String Methods
let str16 = "Hello World";
console.log(str16.startsWith("Hello")); // Output: true
console.log(str16.endsWith("World")); // Output: true
console.log(str16.includes("World")); // Output: true

// Without Build in String Methods
function stringCharacterChecking(str16, target) {
  let start = 0;
  let end = target.length - 1;
  for (let i = start; i <= end; i++) {
    if (str16[i] !== target[i]) {
      return false;
    }
  }
  return true;
}
console.log(stringCharacterChecking("Hello World", "Hello")); // Output: true
console.log(stringCharacterChecking("Hello World", "World")); // Output: false

// 15. Palindrome String:
// With Build in String Methods
let str17 = "Hello World";
console.log(str17.split("").reverse().join("") === str17); // Output: false

// Without Build in String Methods
function palindromeString(str17) {
  let start = 0;
  let end = str17.length - 1;
  while (start < end) {
    if (str17[start] !== str17[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
console.log(palindromeString("Hello World")); // Output: false

// 16. Anagram String:
// With Build in String Methods
let str18 = "Hello World";
let str19 = "World Hello";
console.log(
  str18.split("").sort().join("") === str19.split("").sort().join("")
); // Output: true

// Without Build in String Methods
function anagramString(str18, str19) {
  if (str18.length !== str19.length) {
    return false;
  }
  let map = {};
  for (let char of str18) {
    map[char] = map[char] + 1 || 1;
  }
  for (let char of str19) {
    if (!map[char]) {
      return false;
    }
    map[char]--;
  }
  return true;
}
console.log(anagramString("Hello World", "World Hello")); // Output: true

// 17. String to Integer:
// With Build in String Methods
let str20 = "123";
console.log(parseInt(str20)); // Output: 123

// Without Build in String Methods
function stringToInteger(str20) {
  let result = 0;
  for (let char of str20) {
    result = result * 10 + (char.charCodeAt(0) - "0".charCodeAt(0));
  }
  return result;
}
console.log(stringToInteger("123")); // Output: 123

// 18. Integer to String:
// With Build in String Methods
let num1 = 123;
console.log(num1.toString()); // Output: "123"

// Without Build in String Methods
function integerToString(num1) {
  let result = "";
  while (num1 > 0) {
    result = String.fromCharCode((num1 % 10) + "0".charCodeAt(0)) + result;
    num1 = Math.floor(num1 / 10);
  }
  return result;
}
console.log(integerToString(123)); // Output: "123"

// 19. String to Character Array:
// With Build in String Methods
let str21 = "Hello World";
console.log(str21.split("")); // Output: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

// Without Build in String Methods
function stringToCharacterArray(str21) {
  let result = [];
  for (let char of str21) {
    result.push(char);
  }
  return result;
}
console.log(stringToCharacterArray("Hello World")); // Output: ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

// 20. Character Array to String:
// With Build in String Methods
let arr1 = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];
console.log(arr1.join("")); // Output: "Hello World"

// Without Build in String Methods
function characterArrayToString(arr1) {
  let result = "";
  for (let char of arr1) {
    result += char;
  }
  return result;
}
console.log(
  characterArrayToString([
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d",
  ])
); // Output: "Hello World"

// 21. String to Character Map:
// With Build in String Methods
let str22 = "Hello World";
let map = {};
for (let char of str22) {
  map[char] = map[char] + 1 || 1;
}
console.log(map); // Output: { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }

// Without Build in String Methods
function stringToCharacterMap(str22) {
  let map = {};
  for (let char of str22) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
}
console.log(stringToCharacterMap("Hello World")); // Output: { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }

// 22. Character Map to String:
// With Build in String Methods
let map1 = { H: 1, e: 1, l: 3, o: 2, " ": 1, W: 1, r: 1, d: 1 };
let result2 = "";
for (let char in map1) {
  result2 += char.repeat(map1[char]);
}
console.log(result2); // Output: "Hello World"

// Without Build in String Methods
function characterMapToString(map1) {
  let result = "";
  for (let char in map1) {
    for (let i = 0; i < map1[char]; i++) {
      result += char;
    }
  }
  return result;
}
console.log(
  characterMapToString({ H: 1, e: 1, l: 3, o: 2, " ": 1, W: 1, r: 1, d: 1 })
); // Output: "Hello World"

// 23. String Permutation:
// With Build in String Methods
let str23 = "Hello World";
let str24 = "World Hello";
console.log(
  str23.split("").sort().join("") === str24.split("").sort().join("")
); // Output: true

// Without Build in String Methods
function stringPermutation(str23, str24) {
  if (str23.length !== str24.length) {
    return false;
  }
  let map = {};
  for (let char of str23) {
    map[char] = map[char] + 1 || 1;
  }
  for (let char of str24) {
    if (!map[char]) {
      return false;
    }
    map[char]--;
  }
  return true;
}
console.log(stringPermutation("Hello World", "World Hello")); // Output: true

// 24. String to Character Set:
// With Build in String Methods
let str25 = "Hello World";
let set = new Set();
for (let char of str25) {
  set.add(char);
}
console.log(set); // Output: Set { 'H', 'e', 'l', 'o', ' ', 'W', 'r', 'd' }

// Without Build in String Methods
function stringToCharacterSet(str25) {
  let set = new Set();
  for (let char of str25) {
    set.add(char);
  }
  return set;
}
console.log(stringToCharacterSet("Hello World")); // Output: Set { 'H', 'e', 'l', 'o', ' ', 'W', 'r', 'd' }

// 25. Character Set to String:
// With Build in String Methods
let set1 = new Set(["H", "e", "l", "o", " ", "W", "r", "d"]);
let result3 = "";
for (let char of set1) {
  result3 += char;
}
console.log(result3); // Output: "Hello World"

// Without Build in String Methods
function characterSetToString(set1) {
  let result = "";
  for (let char of set1) {
    result += char;
  }
  return result;
}
console.log(
  characterSetToString(new Set(["H", "e", "l", "o", " ", "W", "r", "d"]))
); // Output: "Hello World"
