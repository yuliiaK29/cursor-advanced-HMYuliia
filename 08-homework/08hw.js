const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const getMyTaxes = function(salary) {
    return this.tax * salary;
}
console.log(getMyTaxes.call(ukraine, 1500));

const getMiddleTaxes = function() {
    return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(ukraine));

const getTotalTaxes = function() {
    return  this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(ukraine));

const getMySalary = function() {
    const salary = Math.random () * (2000 - 1500) + 1500;
    return {
        salary: salary.toFixed(2),
        taxes: (this.tax * salary).toFixed(2),
        profit: (salary - (this.tax * salary)).toFixed(2),
    }
};
setInterval(() => console.log (getMySalary.call(ukraine)), 12000); 


