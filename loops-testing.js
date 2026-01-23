function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
}

const text = "javascript loop practice";
let count = 0;
const vowels = "aeiou";

for (let i = 0; i < text.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (text[i].toLowerCase() === vowels[j]) {
      count++;
      break;
    }
  }
}

console.log(count);
const n = 3;
let output = "";
for (let i = 1; i <= n; i++) {
  let spaces = "";
  let stars = "";

  for (let s = 1; s <= n - i; s++) spaces += " ";
  for (let st = 1; st <= i * 2 - 1; st++) stars += "*";

  output += spaces + stars + "\n";
}
for (let i = n - 1; i >= 1; i--) {
  let spaces = "";
  let stars = "";

  for (let s = 1; s <= n - i; s++) spaces += " ";
  for (let st = 1; st <= i * 2 - 1; st++) stars += "*";

  output += spaces + stars + "\n";
}

console.log(output);
        
