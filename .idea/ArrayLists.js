/**
 * Created by cyresallen on 2/9/17.
 */


console.log("Hello and welcome to our purchase calculator!");
console.log("We will be asking you for 2 item prices and the sales tax rate.");

var cost1String = prompt("What is the cost of your first item? ");

var cost2String = prompt("what is the cost of your second item?");

var salesTaxString = prompt("what is the sales tax rate percent?");

console.log("I have all the information I need. Your first item costs " + cost1String );
console.log("Your second item costs "+ cost2String);
console.log("The sales tax is " + salesTaxString);


var addSalesTax = function(price, tax){

    return price + price * (tax/100);
}

var totalCosts = function(cost1, cost2){

    cost1 = 0;
    cost2 = 0;
    return cost1 + cost2;
}