// let sentence = "  JavaScript is Awesome  ";
// let trimmed= sentence.trim();
// console.log(trimmed);
// //convert to lower and uppercase
// console.log(trimmed.toLowerCase());
// console.log(trimmed.toUpperCase());
// console.log(trimmed.startsWith("Java"));
// console.log(trimmed.endsWith("Awesome"));
// let word="Banana";
// let count= word.toLowerCase().split("a").lenght -1;
// // console.log('Letter 'a' count: ${count}');
// let text ="Learning javaScript from basics to advanced javaScript";
// let replaced= text.replace("JavaScript","JS");
// console.log(replaced);
// let str= "Hello World";
// console.log(str.slice(6,11));
// console.log(str.substring(6,11));
// function isPalindrome(str) {
//     let clean= str.toLowerCase();
//     return clean === clean.split("").reverse().join("");
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("Hello"));
// let input= "JavaScript";
// let vowels= input.match(/[aeiou]/gi).length;
// let consonants= input.match(/[^aeiou]/gi).length;
// console.log('vowels: ${vowels},  Consonants: ${consonants}');
// let sentence2= "I am learning javaScript programming";
// let words= sentence2.split("");
// let longest = words.reduce((a,b) => a.lenght > b.lenght ? a : b);
// console.log(longest);
let text2= "programming";
let result= "";
for (let char of text2) {
    if (!result.includes(char)) {
        result += char;
    }
}
console.log(result);