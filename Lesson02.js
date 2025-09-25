let name = 'Lilly';
let address = '107 Dorset street';
let age = 24;
let hobby = 'movies';
let hobbies = ['movies', 'video games', 'walking', 'hiking', 'killing people'];
console.log(hobbies[1]);
console.log(hobbies[2]);   

let playScore = 0;
console.log(playScore);
playScore += 1;
console.log(playScore);

function addScore() {
    playScore += 1;
    console.log("Score Added");
}

function displayScore() {
    console.log("Score is: " + playScore);
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
    if(number % 2 == 0){
        console.log("This number is even");
    }else{
        console.log("This number is odd");
    }
}

addScore();

oddOrEven(playScore);