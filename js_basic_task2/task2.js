import chalk from "chalk";

let initialCarPrice = 10000;
let yearCar = 2019;
let carMileage = 50000;
let hasClimateControl = true;
let hasSafetyPackage = true;
let isCarElectric = true;
let addPrice = 0;
let reducePrice = 0;
let summaryReport = "";

if (yearCar >= 2019 && yearCar <= 2022){
    addPrice = initialCarPrice * 0.1;
    summaryReport = `\nyear\t\t\t +${addPrice}$`
}
if (carMileage >= 50000 && carMileage <= 100000){
    reducePrice = initialCarPrice * 0.05;
    summaryReport += `\nmileage\t\t\t -${reducePrice}$`
}
if (hasClimateControl == true){
    let hasClimatePrice = Math.floor(initialCarPrice * 0.07);
    addPrice = addPrice + hasClimatePrice;
    summaryReport += `\nhas climate control\t +${hasClimatePrice}$`
}
if (hasSafetyPackage == true){
    let hasSafetyPrice = Math.floor(initialCarPrice * 0.08)
    addPrice = addPrice + hasSafetyPrice;
    summaryReport += `\nhas safety package\t +${hasSafetyPrice}$`
}
if (isCarElectric == true){
    let typeEnginePrice = initialCarPrice * 0.15
    addPrice = addPrice + typeEnginePrice;
    summaryReport += `\nis electric\t\t +${typeEnginePrice}$`
} 

let finalCarPrice = initialCarPrice + addPrice - reducePrice;

console.log("Initial car price is: " + chalk.yellow(initialCarPrice+"$"))
console.log("Final car price is: " + chalk.green(Math.floor(finalCarPrice)+"$"))

if (summaryReport != ""){
    console.log(`Summary report: ${summaryReport}`)
} 


