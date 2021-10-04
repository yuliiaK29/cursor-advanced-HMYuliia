const getMaxDigit = (number) => {
  if(number === 0){ 
    return 0;}
  else{
    return Math.max(number % 10, getMaxDigit(Math.floor(number / 10)));
  }
}

const getPow = (number, power) => {
    let result = number;
    for (let i = 1; i < power; i++) {
        result *= number;
    }
    return result;
}

const formatFirstLetter = (name) => name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();

const getProfit = (salary) =>
{
  return (salary - (salary * 19.5)/100);
}

const getRandomNumber = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

const countLetter = function(word, letter) {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            result++;
        }
    }
    return result;
}

const convertCurrency = (currency) => {
    if (currency.includes('$')){
        return (parseInt(currency) * 25) + 'UAH';
    }if (currency.toUpperCase().includes('UAH')) {
        return (parseInt(currency) / 25) + '$';
    }else {
        alert ('Please choose $ or UAN');
        return 0;
    }
}

const getRandomPassword = function(number = 8) {
    let result = '';
    for (let i = 0; i < number; i++) {
        result += Math.round(Math.random() * 9);
    }
    return result;
}

const deleteLetters = function(word, letter){
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            continue;
        }
        result += word[i];
    }
    return result;
}


document.writeln(`
Function #1: ${getMaxDigit (5679)}<br>
Function #2: ${getPow (8, 2)}<br>
Function #3: ${formatFirstLetter ('yULiiA')}<br>
Function #4: ${getProfit (1000)}<br>
Function #5: ${getRandomNumber (1, 10)}<br>
Function #6: ${countLetter ('Асталавістааа', 'а')}<br>
Function #7: ${convertCurrency ('100$')}<br>
Function #8: ${getRandomPassword ()}<br>
Function #9: ${deleteLetters ('blablabla', 'a')}<br>
`);
