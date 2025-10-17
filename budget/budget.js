/*
*@Gagan Lakandri
*This program calculates the Budget  and display in USD
*/

// Declare Variables
let money = 50000;             
let housing = 4000;          
let food = 3000;               
let monthlyUtilities = 2000;   

// Calculate Total Income
let totalIncome = money;

// Calculate Total Expenses
let totalExpenses = housing + food + monthlyUtilities;

// Calculate Remaining Money
let remainingMoney = totalIncome - totalExpenses;

// Calculate Percentages
let rentPercentage = (housing / totalIncome) * 100;
let groceryPercentage = (food / totalIncome) * 100;

// Output the Results
console.log("The total income was: " + totalIncome.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("The total housing cost was: " + housing.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("The grocery total was: " + food.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("The total utilities cost was: " + monthlyUtilities.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("Total expenses: " + totalExpenses.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("Remaining money: " + remainingMoney.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("Percentage spent on rent: " + rentPercentage.toFixed(2) + "%");
console.log("Percentage spent on groceries: " + groceryPercentage.toFixed(2) + "%");
