const chairPrice = 15.678;
const wardrobePrice = 123.965;
const sofaPrice = 90.2345;
const customerMoney = 500;

const maxPrice = Math.max(chairPrice,wardrobePrice,sofaPrice);
console.log (maxPrice);
const minPrice = Math.min(chairPrice,wardrobePrice,sofaPrice);
console.log (minPrice);
const sumPrice = chairPrice + sofaPrice + wardrobePrice;
console.log (sumPrice);
const minSum = Math.floor(chairPrice) + Math.floor(wardrobePrice) + Math.floor(sofaPrice);
console.log (minSum);
const roundSum = Math.round(minSum/100)*100;      
console.log (roundSum);
const evenSum = roundSum%2===0;
console.log(evenSum);
const changeSum = customerMoney - sumPrice;
console.log(changeSum);
const averagePrice = (sumPrice / 3).toFixed (2);
console.log(averagePrice);
const discountPercentage = Math.round(Math.random() * 100);
console.log(discountPercentage);
const discount = (sumPrice / 100 * discountPercentage).toFixed (2);
console.log(discount);
const sumForPayment = (sumPrice - discount).toFixed (2);
console.log(sumForPayment);
const cost = (sumPrice / 2).toFixed (2);
console.log(cost);
const profit = (cost - discount).toFixed (2);
console.log(profit);
document.write(''
     + 'Max amount: ' + maxPrice + '<br>' 
     + 'Min amount: ' + minPrice + '<br>'  
     + 'The sum of all goods: ' + sumPrice + '<br>'
     + 'Min sum: ' + minSum + '<br>'
     + 'Rounded sum: ' + roundSum + '<br>'
     + 'Is the sum even?: ' + evenSum + '<br>'
     + 'Change: ' + changeSum + '<br>'
     + 'Average Price: ' + averagePrice + '<br>'
     + 'Discount percentage: ' + discountPercentage + '<br>'
     + 'Discount: ' + discount + '<br>'
     + 'Sum for pay: ' + sumForPayment + '<br>'
     + 'Cost of goods: ' + cost + '<br>'
     + 'Profit: ' + profit + '<br>'
    )