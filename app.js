let myArr = [[2, 3, 4, 4, 4, 4], [5, 5], [5], [9, 8, 7]]; // 2D array

// console.log(myArr[0][0]);
// console.log(myArr[0][1]);
// console.log(myArr[0][2]);
// console.log(myArr[0][3]);
// console.log(myArr[0][4]);
// console.log(myArr[0][5]);
// console.log(myArr[1][0]);
// console.log(myArr[1][1]);
// console.log(myArr[2][0]);
// console.log(myArr[3][0]);
// console.log(myArr[3][1]);
// console.log(myArr[3][2]);

let arr = [
  [1, 2, 4, 5],
  [8, 9, 3, 0],
];

for (let i = 0; i < 4; i++) {
  // console.log("start")
  for (let j = 0; j < 4; j++) {
    // console.log(arr[i][j])
  }
}

// Title Case
let myString = "mY NamE iS SyEd aBrAr";
// "My Name is Syed Abrar"

// console.log(myString.toLowerCase());
// console.log(myString.toUpperCase());

myString = myString.toLowerCase();

let words = myString.split(" ");

let result = "";
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  console.log(words[i][0].toUpperCase() + word.slice(1));
  result += words[i][0].toUpperCase() + word.slice(1);
}

console.log(result);
