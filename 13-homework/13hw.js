const getRandomChinese = function (length) {
  return new Promise(function (resolve) {
    let stringOfSymbols = "";
    let i = 1;
    while (i <= length) {
      setTimeout(() => {
        const symbol = String.fromCharCode(Date.now()).slice(-5);
        stringOfSymbols += symbol;
        if (stringOfSymbols.length === length) {
          resolve(stringOfSymbols);
        }
      }, i * 50);
      i++;
    }
  });
};
getRandomChinese(4).then(result => console.log(result));
