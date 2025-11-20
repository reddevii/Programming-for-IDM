let name = "Lilly";
let age = 24;
let isOnline = true;
let address = '107 Dorset Street Upper';
let hobbies = ['movies, video games, reading, exercising'];
console.log(hobbies[1]);
console.log(hobbies[4]);


console.log(age, isOnline);

age = 25;
isOnline = false;

let fruits = ["apple", "banana", "cherry", "mango", "kiwi"];

console.log("Second item:", fruits[1]);
console.log("Third item:", fruits[2]);

// Create a variable for playerScore
let playeScore = 0;

// Function that adds one to the playerScore
function addScore() {
  playeScore += 1;
}

// Function that displays the playerScore
function displayScore() {
  console.log("Score is: " + playeScore);
}

addScore();
displayScore();

let raining = false;
if(raining == true){
        console.log("I need to take my umbrella");
}else{
        console.log("I don't need my umbrella");
}

function oddOrEven(number){
    if(number % 2 ==0){
        console.log("This number is even");
    }else{
        console.log("This number is odd");
    }
}


addScore();      // score increases
displayScore();  // see score
oddOrEven(playeScore); // tells you odd/even
