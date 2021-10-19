const getRandomArray = (length, min, max) =>{
    const randomNumbers = [];
    for (let i = 0; i < length ; i++) {
        randomNumbers.push(Math.round(Math.random() * (max - min + 1) + min));
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
    const halfOfMiddleNumber = middleNumber.length / 2;
    if (middleNumber.length % 2) {
        return middleNumber[Math.floor(halfOfMiddleNumber)];
    }
    return (middleNumber[halfOfMiddleNumber] + middleNumber[halfOfMiddleNumber - 1]) / 2;
}
console.log(getMedian(1, 2, 3, 4, 5));

const filterEvenNumbers = (...numbers) => numbers.filter(number => number % 2);
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

const countPositiveNumbers = (...numbers) => numbers.filter(number => number > 0).length;
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

const getDividedByFive = (...numbers) => numbers.filter(number => number % 5 === 0);
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

const badWords = ["fuck", "shit", "bastard", "bollocks"];
const replaceBadWords = (string) => {
    let tempString = string.split(' ');
    for (let i = 0; i < badWords.length; i++) {
        tempString = tempString.map((tempString) => tempString.replaceAll(badWords[i], calculateStars(badWords[i].length)))};
    return tempString.join(' ');
}
const calculateStars = (number) => {
    let starsString = "";
    for (let i = 0; i < number; i++){
        starsString +=  "*";
    }
    return starsString;
}
    console.log(replaceBadWords("It's bullshit,bollocks!"));