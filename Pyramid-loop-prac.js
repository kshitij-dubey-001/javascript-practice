const rows = 5;
let result = "";

for (let i = 1; i <= rows; i++) {
  let spaces = "";
  let stars = "";

  for (let s = 1; s <= rows - i; s++) {
    spaces += " ";
  }

  for (let st = 1; st <= i * 2 - 1; st++) {
    stars += "*";
  }

  result += spaces + stars + "\n";
}

console.log(result);
