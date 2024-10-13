// Problem Number 1
let burgerPrice = 500;

if (burgerPrice >= 500) {
  console.log("আমিন একট ফ্রী কোক পাবে।");
} else {
  console.log("কোকের দাম ৩০টাকা।");
}

// problem Number 2
let weight = 100;
let height = 1.75;

let bmi = weight / (height * height);

console.log(bmi.toFixed(1));

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

// Problem Number 3
let score = 98;

let grade;

if (score <= 100 && score >= 90) {
  grade = "Grade: A";
} else if (score <= 89 && score >= 80) {
  grade = "Grade: B";
} else if (score <= 79 && score >= 70) {
  grade = "Grade: C";
} else if (score <= 69 && score >= 60) {
  grade = "Grade: D";
} else if (score <= 59 && score >= 0) {
  grade = "Grade: F";
}

if (isNaN(score)) {
  console.log("This NOT a Number");
} else {
  console.log(grade);
}

// Problem Number 4
let myScore = 81;
let friendScore = 60;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("Go for lunch.");
  } else if (friendScore >= 60) {
    console.log("Good luck next time.");
  } else if (friendScore >= 40) {
    console.log("Keep your friend's message unseen.");
  } else {
    console.log("Block Your Friend");
  }
} else {
  console.log("Go to your home and sleep");
}

// problem number 5

let num1 = 15;
let num2 = 15;

let result = num1 > num2 ? num1 * num1 : num1 + num2;

console.log(result);

// Problem number 6

console.log("********************");
let age = 105;
let isStudent = false;
let ticketPrice = 800;

if (age < 10) {
  console.log("Ticket For free");
  ticketPrice = 0;
} else if (age >= 60) {
  // সিনিয়র সিটিজেনদের জন্য ১৫% ছাড়
  let discount = (ticketPrice * 15) / 100;
  ticketPrice -= discount;
} else if (isStudent) {
  // শিক্ষার্থীদের জন্য ৫০% ছাড়
  let discount = (ticketPrice * 50) / 100;
  ticketPrice -= discount;
} else {
  console.log("Regular ticket price: " + ticketPrice);
}

console.log("Final Ticket Price: " + ticketPrice + " টাকা");
