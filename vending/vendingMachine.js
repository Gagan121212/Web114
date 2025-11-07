/* 
*@Gagan Lakandri
*11/7/25
*/

// Ask for Number of Snacks
let snackCount = prompt("How many snacks do you want?");

if (snackCount === null) {
  console.log("No snacks requested. Exiting.");
} else {
  snackCount = Number(snackCount); 

  for (let i = 1; i <= snackCount; i++) {
    let snack = prompt("Enter snack #" + i + " name:");

    // If user cancel then
    if (snack === null) {
      console.log("Snack selection canceled. Exiting.");
      break;
    }

    // Display the snack message
    console.log("Snack #" + i + ": " + snack + " given to customer");

    // Bonus snaks
    if (i % 3 === 0) {
      console.log("You got a bonus snack!");
    }
  }
}
