/**
 * Created by cyresallen on 2/7/17.
 */

//Problem 1
//Logical Operators : Tire Pressure

var carTires = [4];
var userName = prompt("Please start. What is your name?");


function validateName() {

    if (userName == " "){
        alert("Please dont leave ethis question blank, please type in your name");
        return false;
    }
}

var tire1 = prompt("Enter the first tire pressure in psi in a whole number");
var tire2 = prompt("Enter the second tire pressure in psi in a whole number");
var tire3 = prompt("Enter the third tire pressure in psi in a whole number");
var tire4 = prompt("Enter the fourth tire pressure in psi in a whole number");

    if(tire1 === tire2 && tire3 == tire4){
        alert("tire pressure is fine");
    }else {
        alert("get tires checked");

}


for (i = 0; i < carTires.length; i++){
        carTires[i];
        console.log("The psi pressure of the tire is" + tire1, tire2, tire3, tire4 );
}

//Problem 2
//Logical Operators : Movie Ticket Prices

var regTicket = 12;
var discTicket = 7;
var olderCus = 55;
var youngerCus = 10;
var movieView = [3, 4, 5];

var userAgeInput = prompt("Hi! Please enter your age");

var movieTime = prompt("Please enter a movie time.Assume time is a whole number");

if ((olderCus >= 55) || (younger <= 10)){
    console.log("You can get a discounted ticket");

    if (movieTime == 3 && movieTime <=5){

        console.log("you can get a discounted ticket");
    }else{
        console.log("you cannot get a discounted ticket");
    }

}else {
    console.log("you do not get a discounted ticket");
}

//Problem 3
//Add up the odds

var numString = console.log("How many numbers will you enter?");
var anyNumLength;
var total = 0;

console.log("Please enter each number in your group");

for (i = 0; i < numString.length; i++){

}

//Problem 4
//Givens

var fighter1 = "Bill Guy";
var fighter2 = "Atom Bomb";
var healthfighter1 = 100;
var healthfighter2 = 75;
var damageFighter1 = 20;
var damageFighter2 = 30;
var winnerWinner = 0;
var round = 1;









