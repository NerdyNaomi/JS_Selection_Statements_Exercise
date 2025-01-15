//Exercise 1:
console.log("Exercise 1:\n==========\n");

let favNum = 7;
let guessNum = window.prompt(
  "Can you guess my favorite number between 1 and 10?"
);

console.log(`Your guess was: ${guessNum}`);

if (isNaN(guessNum)) {
  console.log(`Your response is not a number.`);
} else {
  if (guessNum > 10 || guessNum < 0) {
    console.log(`Your number is not between 1 and 10!`);
  } else {
    if (guessNum == favNum) {
      console.log("Yep! Seven is my favorite number! Congratulations!");
    } else if (guessNum == favNum + 1) {
      console.log("That's too high, but you're close!");
    } else if (guessNum == favNum - 1) {
      console.log("That's too low, but you're close!");
    } else if (guessNum > favNum + 1) {
      console.log("That's too high!");
    } else if (guessNum < favNum - 1) {
      console.log("That's too low!");
    }
  }
}

if (guessNum == favNum) {
  console.log(`You did great! You can play again by refreshing the page!`);
} else {
  console.log(`You can refresh the page to try again!`);
}

//Exercise 2:
console.log("Exercise 2:\n==========\n");

let birthMonth = window.prompt("What is your birth month?");

console.log(`You said your birth month was ${birthMonth}.`)

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log(`Your birth season is Winter.`);
    break;
  case "march":
  case "april":
  case "may":
    console.log(`Your birth season is Spring.`);
    break;
  case "june":
  case "july":
  case "august":
    console.log("Your birth season is Summer.");
    break;
  case "september":
  case "october":
  case "november":
    console.log(`Your birth season is Fall.`);
    break;
  default:
    console.log(`Invalid Input!`);
}

// Exercise 3:
console.log("Exercise 3:\n==========\n");

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
case "01":
  type = "Tank top";
break;
case "02":
  type = "T-Shirt";
break;
case "03":
  type = "Long Sleeve";
break;
case "04":
  type = "Sweat Shirt";
break;
default:
  type = "Other";
}

switch (colorId) {
case "BK":
  color = "Black";
break;
case "BL":
  color = "Blue";
break;
case "RD":
  color = "Red";
break;
case "PU":
  color = "Purple";
break;
default:
  color = "White";
}

switch (sizeId) {
case "S":
  size = "Small";
break;
case "M":
  size = "Medium";
break;
case "L":
  size = "Large";
break;
case "XL":
  size = "Extra Large";
break;
default:
  size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
