"use strict";
var id = 7;
//types 
let mebtus = "Etubaba";
let age = 38;
let bad = 'etu';
let arr = [1, 2, 1, 3]; // array of numbers
let arr2 = ['na', 'cool', 'fool']; // array of strings
let arr3 = [`msm`, 4, true]; //array of any 
//tuples
//tuples defines the type choice 
let person = ['name', 32, false];
let employee; //array of arrays
employee = [
    [3, 'food'],
    [4, 'meat']
];
//union 
let ashawo; // using or in types 
ashawo = 7;
//enum types (enumerated types)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 0,
    name: 'user'
};
//type assertion
let buns = 7;
let pepperRoll = buns;
pepperRoll = 'food';
//functions 
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 5));
//interfaces
