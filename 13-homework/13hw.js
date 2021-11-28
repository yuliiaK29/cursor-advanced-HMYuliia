const getRandomChinese = function (length){
return new Promise(function(resolve){
  let stringOfSymbols = "";
  let copyOfLength = length;
    while (copyOfLength > 0) {
      setTimeout(() => {
      const timeInMs = Date.now();
      const lastFiveCharacters = timeInMs.toString().slice(-5);
      const sign = parseInt(lastFiveCharacters);
      const symbol = String.fromCharCode(sign);
      stringOfSymbols += symbol;
      if (stringOfSymbols.length === length) {
        resolve(stringOfSymbols);
    }
    }, 50);
    copyOfLength--;
    }
  });
}
getRandomChinese(4).then(result => console.log(result));