// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi
// Display the following metrics for your pet:

// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age

// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.

// Add the ability to name your pet.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.


/* ***************************************** Modal Section Start ********************************************* */

//on page load open the modal-box by changing diplay to flex
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".modal-box").style.display = "flex";
    
})

// Take the input and apply it to input-name h2
// After clicking on submit close the modal-box(display:none) and change opacity of modal container to 0

document.querySelector(".submit-btn").addEventListener('click', () => {
    let inputName = document.getElementById("input-Name").value;
 document.querySelector(".player-name").innerText = inputName;
    document.querySelector(".modal-container").style.display = "none";
    
})

// save input to player name when user clicks enter
//Submit Button
document.getElementById('input-Name').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let inputName = document.getElementById("input-Name").value;
        document.querySelector(".player-name").innerText = inputName;
        document.querySelector(".modal-container").style.display = "none";
    }
});

//close-btn
document.querySelector(".close-btn").addEventListener("click",() => {
document.querySelector(".modal-container").style.display = "none";
console.log("click is working")
document.querySelector(".player-name").style.display = "none"
})



/* ***************************************** Modal Section End ********************************************* */


/* ***************************************** Controls Section start ********************************************* */

//when clicked on play time decrease Boredom progress-bar by one
//when not clicked on play time increase progress-bar Boredom by one
//when Boredom progress bar reaches 10 kill pet(pokemon)

/* ***** Play Time(boredom) ***** */





//when clicked on feed me decrease eat progress-bar by one
//when not clicked on feed me increase progress-bar eat by one
//when eat progress bar reaches 10 kill pet(pokemon)

/* ***** Feed Me(Eat) ***** */








//when clicked on lights on/off button toggle video src to lights-on/out video according
//when lights off change button to green, when lights on change button to red
//when clicked on lights on/off descrease sleep progress-bar by one
//when not-clicked on lights on/off increase sleep progress-bar by one
//when progress bar reached 10 kill pet(pokemon)

/* ***** Lights on/off (sleep)***** */





/* ***************************************** Controls Section End ********************************************* */