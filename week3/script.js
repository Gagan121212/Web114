/**
 * @Gagan 
 * 10/25/25
 */
let total = prompt("What is your shopping total?");
total = Number(total);
let confirmed = confirm("You entered: $" + total + " total. Click OK to continue.");

if (confirmed) {
    if (total >= 100) {
        alert("20% off");
    } else if (total >= 50) {
        alert("10% off");
    } else {
        alert("No discount");
    }
} else {
    alert("You cancelled the confirmation. Please refresh to try again.");
}
