//Create a pet class with following arguments
//Name, age, sleep, hunger, boredom

class Pet {
    constructor(name, age, sleep, hunger, boredom) {
        this.name = name;
        this.age = age;
        this.sleep = sleep;
        this.hunger = hunger;
        this.boredom = boredom;
    }


}
//create pokemon as a child of pet
//create method for age, sleep hunger and boredom when called decrement by 1
//create a name method, if no name given display guest
class Pokemon extends Pet {
    constructor(name, age, sleep, hunger, boredom) {
        super(name, age, sleep, hunger, boredom)
        this.name = name;
        this.age = 0;
        this.sleep = 0;
        this.hunger = 0;
        this.boredom = 0;
    }
    sleep() {
        this.sleep--
    }
    hunger() {
        this.hunger--
    }
    boredom() {
        this.boredom--
    }
    name() {
        if (this.name = "") {
            let guest = "Guest"
            return this.name = guest
        } else {
            return this.name
        }

    }

}

let pokemon = new Pokemon("Tamagotchi")
let lightsOn = true;

/* ***************************************** Modal Section Start ********************************************* */

//on page load open the modal-box by changing diplay to flex
window.addEventListener("load", () => {
    document.querySelector(".modal-box").style.display = "flex";
})

const tamagotchi = {
    ageUp() {
        setInterval(() => {
            document.getElementById("age").innerText = `Age: ${pokemon.age}`
            document.getElementById("age").style.width = pokemon.age + "%";
            pokemon.age++
        }, 1000)
    },

    //when clicked on lights on/off button toggle video src to lights-on/out video according
    //when clicked on lights on/off descrease sleep progress-bar by one
    //when not-clicked on lights on/off increase sleep progress-bar by one
    //when progress bar reached 10 kill pet(pokemon) pause video Show the result

    /* ***** Lights on/off (sleep)***** */
    lightsOnOff() {
        lightsOn = !lightsOn;
        if (lightsOn) {
            document.querySelector("#myVideo").src = "./images/lights-off.mp4"
        } else {
            document.querySelector("#myVideo").src = "./images/lights-on.mp4"
        }
    },
    sleepUp() {
        setInterval(() => {
            document.getElementById("sleep").innerText = `Sleep: ${Math.ceil(pokemon.sleep /100 * 10)}`
            document.getElementById("sleep").style.width = pokemon.sleep + "%";
            pokemon.sleep++
        }, 900)
    },

    //when clicked on feed me decrease eat progress-bar by one
    //when not clicked on feed me increase progress-bar eat by one
    //when eat progress bar reaches 10 kill pet(pokemon) pause video Show the result

    /* ***** Feed Me(Eat) ***** */
    hungry() {
        setInterval(() => {
                document.getElementById("eat").innerText = `eat: ${Math.ceil(pokemon.hunger /100 * 10)}`
                document.getElementById("eat").style.width = pokemon.hunger + "%";
                pokemon.hunger++
            }, 800),
            document.querySelector(".feedMeBtn").addEventListener("click", () => {
                pokemon.hunger--
            })
    },

    //when clicked on play time decrease Boredom progress-bar by one
    //when not clicked on play time increase progress-bar Boredom by one
    //when Boredom progress bar reaches 10 kill pet(pokemon) pause video Show the result

    /* ***** Play Time(boredom) ***** */
    bored() {
        setInterval(() => {
                document.getElementById("boredom").innerText = `boredom: ${Math.ceil(pokemon.boredom /100 * 10)}`
                document.getElementById("boredom").style.width = pokemon.boredom + "%";
                pokemon.boredom++
            }, 500),
            document.querySelector(".playTimeBtn").addEventListener("click", () => {
                pokemon.boredom--
            })
        if (pokemon.boredom == 1) {
            document.getElementById("pichu").style.display = "none"
            document.getElementById("pikachu").style.display = "none"
            document.getElementById("raichu").style.display = "none"
            document.getElementById("pokemonDead").style.display = "flex";
         
        }
    }
}







document.querySelector(".lightsOnOffBtn").addEventListener("click", () => {
    tamagotchi.lightsOnOff();
    pokemon.sleep--

})

// document.getElementById("startBtn").addEventListener("click", () => {
//     tamagotchi.ageUp();
// })
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

/* ***************************************** Game Logic Section Start ********************************************* */

//When clicked on start button start timer for the pokemon to hatch after 10 seconds
//when hatched hide pokeball closed, display pokeball open, display next pokemon, hide pokeball open after 3 seconds

/* ***** Start Button ***** */
const startButton = {
    pokeballOpen() {
        document.querySelector(".btn-outline-danger").addEventListener("click", (event) => {
            //playLightsOnVideo on click
            event.target.disabled = true;
            // document.getElementById("myVideo").style.display = "none"
            // document.getElementById("lightsOnVideo").style.display = "flex"
            tamagotchi.ageUp();
            tamagotchi.hungry();
            tamagotchi.sleepUp();
            tamagotchi.bored()
                
            
            document.querySelector(".lightsOnOffBtn").addEventListener("click", () => {
                lightsOn = !lightsOn;
                if (lightsOn) {
                    document.querySelector("#lightsOffVideo").src = "./images/lights-off.mp4"
                    
                } else if(lightsOn = !false ) {
                    document.querySelector("#lightsOnVideo").src = "./images/lights-off.mp4"
                    
                }

            })
            //onClick start button hide closed-pokeball & dislay pichu after 8 seconds
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
}


startButton.pokeballOpen();






//if clicked on play, feed and lights on off buttons call their respective function and evolve to next pokemon after 10 seconds(if none of the progress-bar reach 10 )
//if any one progress bar reach 10 kill pet(pokemon) pause video Show the result




//after evolved to raichu and and is alive for 10 seconds player wins(pause the video and show the result)
/* ***************************************** Game Logic Section End ********************************************* */