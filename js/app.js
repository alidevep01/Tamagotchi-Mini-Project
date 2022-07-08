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
window.addEventListener("load", () => {
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
document.querySelector(".close-btn").addEventListener("click", () => {
    document.querySelector(".modal-container").style.display = "none";
    document.querySelector(".player-name").style.display = "none"
})



/* ***************************************** Modal Section End ********************************************* */


/* ***************************************** Controls Section start ********************************************* */

//when clicked on play time decrease Boredom progress-bar by one
//when not clicked on play time increase progress-bar Boredom by one
//when Boredom progress bar reaches 10 kill pet(pokemon) pause video Show the result

/* ***** Play Time(boredom) ***** */





//when clicked on feed me decrease eat progress-bar by one
//when not clicked on feed me increase progress-bar eat by one
//when eat progress bar reaches 10 kill pet(pokemon) pause video Show the result

/* ***** Feed Me(Eat) ***** */








//when clicked on lights on/off button toggle video src to lights-on/out video according
//when lights off change button to green, when lights on change button to red
//when clicked on lights on/off descrease sleep progress-bar by one
//when not-clicked on lights on/off increase sleep progress-bar by one
//when progress bar reached 10 kill pet(pokemon) pause video Show the result

/* ***** Lights on/off (sleep)***** */





/* ***************************************** Controls Section End ********************************************* */

/* ***************************************** Game Logic Section Start ********************************************* */

//When clicked on start button start timer for the pokemon to hatch after 10 seconds
//when hatched hide pokeball closed, display pokeball open, display next pokemon, hide pokeball open after 3 seconds

/* ***** Start Button ***** */
const startButton = {
    pokeballOpen: document.querySelector(".btn-outline-danger").addEventListener("click", () => {
        //playLightsOnVideo on click
        document.getElementById("myVideo").style.display = "none"
        document.getElementById("lightsOnVideo").style.display = "flex"
        //onClick start button hide closed-pokeball & dislay open-pokeball after 8 seconds
        setTimeout(() => {
            document.getElementById("pichu").style.display = "flex"
            document.getElementById("pokeball-closed").style.display = "none";
            //display pikachu and hide pichu after 8 seconds + 10 seconds
            let pikachuDisplay = setTimeout(() => {
                    document.getElementById("pikachu").style.display = "flex";
                    document.getElementById("pichu").style.display = "none";
                    //display raichu and hide pikachu after 8 seconds + 10 seconds + 10 seconds
                    let raichuDisplay = setTimeout(() => {
                        document.getElementById("raichu").style.display = "flex";
                        document.getElementById("pikachu").style.display = "none";
                    }, 10000)
                },
                10000)

        }, 8000)
    })
}









//if clicked on play, feed and lights on off buttons call their respective function and evolve to next pokemon after 10 seconds(if none of the progress-bar reach 10 )
//if any one progress bar reach 10 kill pet(pokemon) pause video Show the result




//after evolved to raichu and and is alive for 10 seconds player wins(pause the video and show the result)
/* ***************************************** Game Logic Section End ********************************************* */