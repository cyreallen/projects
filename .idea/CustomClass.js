/**
 * Created by cyresallen on 2/9/17.
 */
var customClass = function Shelter(){



}

var maxDogs = 50;
var minsDogs = 0;
var currentDogs = 12;
var newDogsAdded =3;


var shelter = {

    maxDogs: 50,
    minsDogs: 0,
    currentDogs: 12,
    newDogsAdded: 3,


};

var setCurrentDogs = function(currentDogs){

    if(currentDogs > 50){

        console.log("No more than 50 dogs!");
    }else if (currentDogs < 0){

        console.log("Less than 0 dogs");
    }else {

        console.log("There cannot be more than 50 dogs in the shelter")
    }

}

var setNewDogsAdded = function(newDogsAdded){

    newDogsAdded == newDogsAdded;
}

var changeNumDogs = function(currentDogs, newDogsAdded){

    return currentDogs +- newDogsAdded;
}

//do something about this, they could be merged to one function
/*
var subtractNumDogs = function(currentDogs, newDogsAdded){

}
*/

var totalDogs = function(userInput, currentDogs){

    var totalDogs = userInput +  currentDogs;
    return totalDogs;
}

console.log("Currently the shleter can hold a maximum of "+ currentDogs );
console.log("There can be a minimum of " + minsDogs + "in the shelter");
console.log("There is currently " + currentDogs + "dogs in the shelter");
console.log("There are " + newDogsAdded + "new dogs coming into the shelter today");

console.dog(shelter.currentDogs);

for ( i = 0; i < 1; i++){

    var userAnswer = console.log("Have dogs been added or removed from the shelter");
}


var numOne = ("How many new new dogs where added to the shelter?");
var numTwo = ("How many new new dogs where added to the shelter?");
var numThree = ("How many new new dogs where added to the shelter?");
var numFour = ("How many new new dogs where added to the shelter?");
var numFive = ("How many new new dogs where added to the shelter?");

