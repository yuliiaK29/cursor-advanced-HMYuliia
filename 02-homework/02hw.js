let firstNumber;
let secondNumber;

do {
    firstTempString = prompt("Enter the first number");
} while (firstTempString === "" || isNaN(firstTempString));
firstNumber = parseInt(firstTempString);
console.log(firstNumber);

do {
    secondTempString = prompt("Enter the second number");
} while (secondTempString === "" || isNaN(secondTempString));
secondNumber = parseInt(secondTempString);
console.log(secondNumber);

const shouldIgnoreEvenNumbers = confirm("Should we skip even numbers?");

if(firstNumber > secondNumber){
    let tempNumber = firstNumber;
    firstNumber = secondNumber;
    secondNumber = tempNumber;
}
 
let sum = 0;
for(let i = firstNumber; i <= secondNumber; i++){
    if(shouldIgnoreEvenNumbers && i % 2 === 0){
        continue;
    }
    else{
        sum += i;
    }
}
alert (`result: ${sum}`);
