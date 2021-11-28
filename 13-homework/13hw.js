const getRandomChinese = function(length){
return new Promise(function(resolve, reject){
  let stringOfSymbols = "";
    while (length > 0) {
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
      length--;
    }
  });
}
getRandomChinese(4).then(result => console.log(result));