/* Evolve Your Pikachu - WEB114 Final Project
 Answer math questions to turn Pikachu into Raichu!
 */

let happiness = 0;                // how happy Pikachu is right now
const maxHappiness = 100;         // when we hit 100 he evolves
let questionsAnswered = 0;         // just counting how many questions i did

// grabbing everything from the html
const pikachuImg = document.getElementById('pikachu-image');
const progress = document.getElementById('progress');
const happyText = document.getElementById('happy');
const mood = document.getElementById('mood');
const question = document.getElementById('question');
const answersDiv = document.getElementById('answers');
const win = document.getElementById('win');

// all the different pikachu pictures and moods
const stages = [
    { min: 0,   img: "pikachu.png", text: " Tiny sad Pikachu" },
    { min: 25,  img: "stage1.png",  text: " Getting stronger!" },
    { min: 50,  img: "stage2.jpeg",  text: " Happy and energetic!" },
    { min: 75,  img: "stage3.png",  text: " Thunder stone nearby" },
    { min: 100, img: "raichu.png",  text: " EVOLVED INTO RAICHU!" }
];

// this function changes the picture and the bar
function updatePikachu() {
    progress.style.width = happiness + "%";     
    happyText.textContent = happiness;          

    // look for the right stage
    for (let s of stages) {
        if (happiness >= s.min) {              
            pikachuImg.src = s.img;             
            mood.textContent = s.text;         
        }
    }

    // only show win screen if happiness is 100 AND we answered at least one question
    if (happiness >= maxHappiness && questionsAnswered > 0) {
        win.classList.remove("hidden");        
    }
}

// makes a new math question every time
function newQuestion() {
    questionsAnswered = questionsAnswered + 1;  

    answersDiv.innerHTML = "";                

    // random numbers between 1 and 15
    let num1 = Math.floor(Math.random() * 15) + 1;
    let num2 = Math.floor(Math.random() * 15) + 1;
    let correctAnswer = num1 + num2;           

    // make some wrong answers
    let wrong1 = correctAnswer + 4;
    let wrong2 = correctAnswer - 3;
    let wrong3 = correctAnswer + 6;

    // put all answers in one array and shuffle
    let allAnswers = [correctAnswer, wrong1, wrong2, wrong3];
    allAnswers.sort(() => Math.random() - 0.5);

    question.textContent = num1 + " + " + num2 + " = ?";

    // make 4 buttons
    for (let i = 0; i < 4; i++) {
        let btn = document.createElement("button");
        btn.textContent = allAnswers[i];

      
        btn.onclick = function() {
            if (allAnswers[i] == correctAnswer) {
                happiness = happiness + 25;         
                question.textContent = "Correct! +25";
            } else {
                happiness = happiness - 15;         
                if (happiness < 0) happiness = 0;   
                question.textContent = "Wrong! -15";
            }

            updatePikachu();                       
            setTimeout(newQuestion, 1000);          
        };

        answersDiv.appendChild(btn);
    }
}

// buttons at the bottom
document.getElementById("new-q").addEventListener("click", newQuestion);
document.getElementById("again").addEventListener("click", function() {
    location.reload();                             
});

// start the game when page loads

updatePikachu();
