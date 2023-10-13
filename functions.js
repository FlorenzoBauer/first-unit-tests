// functions.js
function addTwoNumbers(num1, num2) {
var num1;
var num2;
    var sum = num1 + num2;
    return sum 
}

function sayHello(name) {
if (name === `Will`)
{
    return `No more testing Will!`
} else {
    return `Hi there ${name}!`
}
}
function buildCar(color,type){
    var carDetails = {
        color: color,
        type: type,
} 
if (color === undefined && type === undefined){
    return {};
}
    else {
    
    return carDetails;
}


}
//  allows of to export funcitons to another file
module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar,
}