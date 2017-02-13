/**
 * Created by cyresallen on 2/8/17.
 */
//Problem 1 circumference

var userName = prompt("What is your name?");

var radUser = prompt("Please enter a radius");



var pi = Math.PI;


//Circumference function
var CircumCirc = function CircumCirc(radUser, pi){

    return  2 * radUser * pi;
}

var number = CircumCirc(radUser, pi);
console.log(number);


//Problem 2 Stung
var howMany = 8.666666667;
var aniWeight;

var enterWeight = console.log("Welcome to the program. What is the animal's weight in pounds?");

var ouch = console.log(enterWeight * howMany);

var beeSting = console.log("It takes" + ouch + "stings to kill this animal");


//Problem 3 Reverse It


var countNum = [5];


countNum[0] = 5;
countNum[1] = 4;
countNum[2] = 3;
countNum[3] = 2;
countNum[4] = 1;

console.log("The array contains" + countNum[0] + countNum[1] + countNum[2] + countNum[3]
+ countNum[4]);

/*
var reverseArray = function reverseArray(countNum){
    var temp = [];
        var len = countNum.length;
    for (var i = (len - 1); i ! == 0; i--){
        temp.push(countNum[i]);
    }
    return result;
}
*/

console.log("The reverse of the array is " + countNum.reverse());



