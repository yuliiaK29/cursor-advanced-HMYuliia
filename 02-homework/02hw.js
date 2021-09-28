let numberN = "";
let numberM = "";
const shouldIgnoreEvenNumbers;

do {
    numberN = +prompt("Enter the first number");
} while (Number.isNaN(numberN));
console.log(numberN);

do {
    numberM = +prompt("Enter the second number");
} while (Number.isNaN(numberM));
console.log(numberM);

shouldIgnoreEvenNumbers = confirm("Should we skip even numbers?");
 
let sum = 0;
for(let i = numberN; i<=numberM; i++){
    if(shouldIgnoreEvenNumbers && i%2===0){
    }
    else{
        sum = sum+i;
    }
}
alert (`result: ${sum}`);
