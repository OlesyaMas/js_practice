let incomeGross = 10000;
let incomeNet;
let tax;

if (incomeGross > 0 && incomeGross < 10000) {
    tax = 5;
    incomeNet = incomeGross - (incomeGross * tax/100);
} else if (incomeGross >= 10000 && incomeGross <= 50000) {
    tax = 10;
    incomeNet = incomeGross - (incomeGross * tax/100 );
} else if (incomeGross > 50000 && incomeGross <= 100000) {
    tax = 15;
    incomeNet = incomeGross - (incomeGross * tax/100);
} else if (incomeGross > 100000 && incomeGross <= 200000) {
    tax = 20;
    incomeNet = incomeGross - (incomeGross * tax/100);
} else if (incomeGross > 200000) {
    tax = 25;
    incomeNet = incomeGross - (incomeGross * tax/100);
}

console.log(`Gross salary is: ${incomeGross}`)
console.log(`Tax is: ${tax}%`)
console.log(`Net salary is: ${Math.floor(incomeNet)}`)
