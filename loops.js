for(let i = 1; i <= 5; i++){
  console.log(i);
}
const nums = [10, 5, 20, 8, 15];

let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > max) {
    secondMax = max;
    max = nums[i];
  } else if (nums[i] > secondMax && nums[i] !== max) {
    secondMax = nums[i];
  }
}

console.log(secondMax);
