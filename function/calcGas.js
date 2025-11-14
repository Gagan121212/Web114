/* 
*@Gagan Lakandri
*11/7/25
*/

let entryCount = 0;
let total = 0;
let weeklyGas = 0;
let username = "";

function calcGasAvg() {
    let averageGas = 0;

    while (weeklyGas !== -1) {
        if (!isNaN(weeklyGas) && weeklyGas !== -1) {
            total += weeklyGas;
            entryCount++;
        }

        let next = prompt("Enter another weekly gas total (-1 to end):", "-1");

        if (next === null) {
            weeklyGas = -1;
        } else {
            next = parseFloat(next);
            weeklyGas = isNaN(next) ? -1 : next;
        }
    }

    if (entryCount > 0) {
        averageGas = total / entryCount;
    } else {
        averageGas = 0;
    }

    return averageGas;
}

function runGasRoutine() {

    username = prompt("Enter your name:");
    if (!username) username = "Guest";

    let first = prompt("Enter FIRST weekly gas total (-1 to end):", "-1");
    if (first === null) {
        weeklyGas = -1;
    } else {
        first = parseFloat(first);
        weeklyGas = isNaN(first) ? -1 : first;
    }

    let gas = calcGasAvg();

    confirm(username + "'s average weekly gas bill is " + gas.toFixed(2));

    if (entryCount === 0) {
        confirm("No gas totals were entered.");
    } else if (entryCount === 1) {
        confirm("You entered 1 gas total.");
    } else {
        confirm(`You entered ${entryCount} gas totals.`);
    }
}

runGasRoutine();