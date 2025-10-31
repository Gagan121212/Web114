/**
 * Gagan Lakandri
 * 10/31/25
 */

//  ask user for their favorite month
let favMonth = prompt("Enter your favorite month:");

// change input/prompt into lowercase
favMonth = favMonth ? favMonth.toLowerCase() : "";

// check error and dispplay favorite months  message
if (!favMonth || /\d/.test(favMonth)) {
    console.log("Please enter a valid month");
} else {
    // switch case, each month with special message
    switch (favMonth) {
        case "january":
            console.log("May the coming year bring you success in all your endeavors.");
            break;
        case "february":
            console.log("You light up my life every day, not just on Valentine’s Day.");
            break;
        case "march":
            console.log("Join us as we welcome spring with a joyful celebration!”");
            break;
        case "april":
            console.log("Thank you for being a bright light in my life.");
            break;
        case "may":
            console.log("Your kindness makes the world a better place.");
            break;
        case "june":
            console.log("Congratulations on your special day! Wishing you a lifetime of happiness.");
            break;
        case "july":
            console.log("Wishing you a summer full of love and laughter");
            break;
        case "august":
            console.log("Keep shining and making every day count.");
            break;
        case "september":
            console.log("Stay focused and keep striving for excellence.");
            break;
        case "october":
            console.log("Enjoy the crisp air and vibrant leaves—happy fall!");
            break;
        case "november":
            console.log("Wishing you a harvest of blessings and happiness.");
            break;
        case "december":
            console.log("Gratitude turns what we have into enough.");
            break;
        default:
            console.log("Cheers to health, happiness, and new beginnings in the New Year");
            break;
    }

    // check season and dispay special message
    if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
        console.log("You love the winter months!");
    } else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
        console.log("You enjoy the summer months!");
    } else if (
        favMonth === "march" ||
        favMonth === "april" ||
        favMonth === "may" ||
        favMonth === "september" ||
        favMonth === "october" ||
        favMonth === "november"
    ) {
        console.log("Other months are interesting too!");
    }
}
