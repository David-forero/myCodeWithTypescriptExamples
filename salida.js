"use strict";
exports.__esModule = true;
//Types
var myString = "hello world";
var myNumber = 22;
var myBoolean = false;
//con esto podré cambiar la variable su tipo
var myVar = "hello";
myVar = 22;
//Prints
document.write(myString);
document.write(myNumber.toString());
//Arrays
var myArrays = ["item1", "item2", "item3"];
var myNumbers = [1, 2, 3];
var myAny = [1, true, "hello"];
//Tuple (para definir un arreglo)
var myTuple;
myTuple = ["hello", 20];
//Functions
//Quiero que los parametros sean tipo numeros y que retorne numeros!
function getSum(num1, num2) {
    return num1 + num2;
}
var sumLet = function (num1, num2) {
    if (typeof (num1) === "string") {
        num1 = parseFloat(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseFloat(num2);
    }
    return num1 + num2;
};
//getName lastname le puse como paramentro opcional
function getName(firstname, lastname) {
    return firstname + " " + lastname;
}
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
showTodo({
    title: "Run",
    text: "I have to run in the morming"
});
