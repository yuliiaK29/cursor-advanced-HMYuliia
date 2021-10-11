const getRandomArray = (length, min, max) =>{
    const randomNumbers = [];
    for (let i = 0; i < length ; i++) {
        randomNumbers.push(Math.round(Math.random() * (max - min) + min));
	}
	return randomNumbers;
}
console.log(getRandomArray (15, 1, 100));

const getAverage = (...numbers) => {
	return numbers.filter(number => Number.isInteger(number))
		.reduce((sum, number) => (sum + number)) / numbers.length;
}
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

const getMedian = (...numbers) => {
    const middleNumber = numbers.filter((number) => Number.isInteger(number)).sort((a, b) => a - b);
    if (middleNumber.length % 2) {
        return middleNumber[Math.floor(middleNumber.length / 2)];
    }
    return (middleNumber[middleNumber.length / 2] + middleNumber[middleNumber.length / 2 - 1]) / 2;
}
console.log(getMedian(1, 2, 3, 4, 5));

const filterEvenNumbers = (...numbers) => numbers.filter(number => number % 2);
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

const countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0).length;
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

const getDividedByFive = (...numbers) => numbers.filter(number => number % 5 === 0);
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

const replaceBadWords = (string) => {
    return string.split(' ').map((string) => string.replaceAll('fuck', '****').replaceAll('shit', '****')).join(' ');;
}
console.log(replaceBadWords("It's bullshit!"));