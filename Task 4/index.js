let number1 = window.prompt("Enter the first number: ");

while(number1 < 0){
    number1 = window.prompt("Please enter a valid number: ");
}

let number2 = window.prompt("Enter the second number: ");
while(number2 < 0){
    number1 = window.prompt("Please enter a valid number: ");
}

function euclideanAlgorithm (number1, number2){
let reminder;
while(((number1%number2> 0))) {
    reminder = number1 % number2;
    number1 = number2;
    number2 = reminder ;

    
}
return number2;

}
console.log(euclideanAlgorithm(number1,number2));