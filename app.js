console.log("Im linked to html, says app.js!");


const buttonClicked = document.getElementById('getNewCatFact');

buttonClicked.addEventListener('click', function (event) {
//Här skriver vi vad som ska hända när vi klickar på knappen.
    //Vi anropar funktionen för att hämta kattfakta
    getRandomCatFacts();
    //Vi anropar funktionen för att hämta hundfakta
    getRandomDogFacts();
    //Här kallar vi på funktionen som räknar vår knapptryckningar
    increment();
    //Här kallar vi på funktionen getKanyneQuotes
    getKanyeQuotes();
    //Här kallar vi på vår knappanimering
    buttonAnimation();

});



//New cat fact function
function getRandomCatFacts() {

    fetch("https://catfact.ninja/fact")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let cat = response;
            console.log(cat);
            document.querySelector('.catFact').innerHTML = "😸 + 🐭 = 🍲 " + cat.fact + " 😸 + 🐭 = 🍲";
        })
        .catch(function (err) {
            console.log('Error: ' + err);
            document.querySelector(".catFact").innerHTML =
                "😿 " + "Sorry, vi kan inte hämta data just nu. Försök senare!" + " 😿";
     
        });
}//End function getRandomCatFacts();

//New dog fact function
function getRandomDogFacts() {

    fetch("https://dogapi.dog/api/v2/facts")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let dog = response;
            console.log(dog);
            document.querySelector('.dogFact').innerHTML = "🐺 + 🦴 = 💩 " + dog.data[0].attributes.body + " 🐺 + 🦴 = 💩";
        })
        .catch(function (err) {
            console.log('Error: ' + err);
            document.querySelector(".dogFact").innerHTML =
                "🐺 " + "Sorry, vi kan inte hämta data just nu. Försök senare!" + " 🐺";
     
        });
}//End function getRandomDogFacts();

/**
 * Håller reda på antaler knapptryckningar
 */
let count = 2;
function increment() {
    document.querySelector(".counting").innerHTML =
        "You have read " + count + " dog and cat facts today!<br />" + "And also " + count/2 + " silly Kanye qoutes.";
    count += 2;
}//End increment();

/**
 * Här är funktionen getKanyneQuotes
 */
function getKanyeQuotes() {
    fetch("https://api.kanye.rest")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let dataK = response;
            console.log(dataK);
            document.querySelector(".kayneQoutes").innerHTML =
                'Kanye says: "' + dataK.quote + '" 🙄';
        })
        .catch(function (err) {
            console.log("Error: " + err);
            document.querySelector(".kayneQoutes").innerHTML =
                '😵 Kayne is out! Try later... 😵';
        });

}

function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
        return response.json();
    })
    .then((response) => {
        let dogImage = response;
        console.log(dogImage.message)
        document.querySelector(".dogImageText").src = dogImage.message;
    })
}

//Jokes Start
document.querySelector(".jokeButton").addEventListener("click", getJokes);

function getJokes() {
    fetch("https://api.jsonbin.io/v3/b/639859b72d0e0021081bb567")
    .then(function (response) {
        return response.json();
    })
    .then((response) => {
        let data = response;
        console.log(data)

        let random = data.record[Math.floor(Math.random() * data.record.length)];
        console.log(random + " " + "random number")

        document.querySelector(".jokeText").innerHTML = random.setup + "<br/><br/>" + random.punchline;
    })

}


function getPokemonAbility() {
    fetch("https://pokeapi.co/api/v2/ability/?offset=0&limit=400")
    .then(function (response){
                return response.json();
    })
    .then((response) => {
        let data = response;
        console.log(data)

        let rng = data.results[Math.floor(Math.random() * data.results.length)];
        console.log(rng)    
        console.log(count)
        document.querySelector(".pokeAbilityText").innerHTML = rng.name;
            fetch (rng.url) 
            .then(function (response) {
            return response.json();
        })
            .then ((response) => {
            let data2 = response;
            console.log(data2.effect_entries)
            document.querySelector(".pokeAbilityPokemonText").innerHTML = "Amount of pokemon with this ability: " +  "<span id=numberPkmn>" + data2.pokemon.length + "</span>";
            document.querySelector(".pokeAbilityGenText").innerHTML = "Original Generation: " + "<span id=numberGen>" + data2.generation.name + "</span>";
            if (data2.effect_entries[0] == undefined || data2.effect_entries[1] == undefined ) {
            document.querySelector(".pokeAbilityEffectText").innerHTML = "No Data Available.";
            } else {
            document.querySelector(".pokeAbilityEffectText").innerHTML = data2.effect_entries[1].short_effect;

            }

        })
    })

}









// Random Pokemon Sprite
fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1300") 
.then (function (response) {
        return response.json();
    })
    .then((response) => {
        let data = response;
        let rng = data.results[Math.floor(Math.random() * data.results.length)];
        fetch(rng.url)
    }) .then (function (response){
        return response.json();
    })
    .then((response) => {
        let data2 = response2; 

        fetch(data2.species.url) // För att hitta species datan, används under för att ta fram OG generation
        .then (function(response3) {
            return response3.json();
        })
        .then((response3) => {
            let data3 = response3;      
        })
    })



function getRandomPokemon() {

        showAnswer()
            if (document.querySelector("#typeButtonFill").classList.contains("guessModeOn")) {
                guessModeAnswers(); 
            }
            if (document.querySelector("#genButtonFill").classList.contains("guessModeOn")) {
                guessModeAnswers(); 
            }
            if (document.querySelector("#nameButtonFill").classList.contains("guessModeOn")) {
                guessModeAnswers(); 
            }
            if (document.querySelector("#dexButtonFill").classList.contains("guessModeOn")) {
                guessModeAnswers(); 
            }
            if (document.querySelector("#imageButtonFill").classList.contains("guessModeOn")) {
                guessModeAnswers(); 
            }
            
        document.querySelector(".pokePokemonText").innerHTML = rng.name;

        const thisRng = data.results.indexOf(rng);
        if (thisRng > -1) {
            data.results.splice(thisRng, 1);
        }
        console.log(data.results)
        console.log(rng)
        
        for (i = 0; i < data.results.length; i++)
            document.querySelector(".pokemonLeftSpan").innerHTML = ((i+1));

            let genTextSpan = document.querySelector(".genTextSpan")
            let pokemonType1 = document.querySelector(".slot1")
            let pokemonType2 = document.querySelector(".slot2")

                
            console.log(data2);
            console.log(data2.sprites.front_default)
            console.log(data2.types[0].type.name)
            document.querySelector(".pokePokemonImage").src = data2.sprites.front_default //Sprite Image
            document.querySelector(".slot1").id = data2.types[0].type.name   // ID connected to Type 1
            document.querySelector("#" + data2.types[0].type.name).innerHTML = data2.types[0].type.name 


            /*function toggleBackSprite() { Doesnt Work, might work on later
            console.log("back toggled")
            document.querySelector(".pokePokemonImage").src = data2.sprites.back_default;
            }
            function toggleFrontSprite() {
            document.querySelector(".pokePokemonImage").src = data2.sprites.front_default;
            }
            document.querySelector(".frontImageButton").addEventListener("click", toggleFrontSprite());
            document.querySelector(".backImageButton").addEventListener("click", toggleBackSprite())**/

            if (data2.types[1] != undefined) { //If only 1 type or not
                document.querySelector(".slot2").id = data2.types[1].type.name
                document.querySelector("#" + data2.types[1].type.name).innerHTML = data2.types[1].type.name
            } else {
                document.querySelector(".slot2").innerHTML = " ";
                document.querySelector(".slot2").id = "noType"
            }
            

            console.log(data3)
            console.log(data3.generation.name)
            console.log(data3.names[6].name)
            document.querySelector(".genTextSpan").innerHTML = data3.generation.name //Retrieve Generation

            document.querySelector(".pokePokemonTextJP").innerHTML = "<img class=flag src=./images/Flag_of_Japan.svg.png>" + data3.names[0].name // To retrieve name in JP
            document.querySelector(".pokePokemonTextDE").innerHTML = "<img class=flag src=./images/flag_german.jpeg>" + data3.names[5].name  //German Name
            //document.querySelector(".pokePokemonTextES").innerHTML = "<img class=flag src=./images/flag_of_Spain.png>" + data3.names[6].name; //Spanish, english and spanihs are the same L 
            document.querySelector(".pokePokemonTextFR").innerHTML = "<img class=flag src=./images/flag_france.png>" + data3.names[4].name; 
            document.querySelector(".pokePokemonDexSpan").innerHTML = data3.pokedex_numbers[0].entry_number // För att få fram nationaldex numret
            


            /*if (document.querySelector(".genTextSpan").innerHTML = "generation-v" ) {
                console.log("gen5 flavor")
                document.querySelector(".pokeFlavorText").innerHTML = data3.flavor_text_entries[1].flavor_text;
                
            }
            if (document.querySelector(".genTextSpan").innerHTML = "generation-vii" ) {
                console.log("gen7 flavor")
                document.querySelector(".pokeFlavorText").innerHTML = data3.flavor_text_entries[7].flavor_text;
            }*/

}

function guessModeButton1() { // To toggle the fill on button
    document.querySelector("#typeButtonFill").classList.toggle("guessModeOn")
}
function guessModeButton2() { // To toggle the fill on button
    document.querySelector("#nameButtonFill").classList.toggle("guessModeOn")
}
function guessModeButton3() { // To toggle the fill on button
    document.querySelector("#genButtonFill").classList.toggle("guessModeOn")
}
function guessModeButton4() { // To toggle the fill on button
    document.querySelector("#dexButtonFill").classList.toggle("guessModeOn")
}
function guessModeButton5() { // To toggle the fill on button
    document.querySelector("#imageButtonFill").classList.toggle("guessModeOn")
}




// För att dölja och visa // Guess Mode
    let genTextSpan = document.querySelector(".genTextSpan")
    let pokemonType1 = document.querySelector(".slot1")
    let pokemonType2 = document.querySelector(".slot2")
    let pokemonNameEn = document.querySelector(".pokePokemonText")
    let pokemonNameDe = document.querySelector(".pokePokemonTextDE")
    //let pokemonNameEs = document.querySelector(".pokePokemonTextES")
    let pokemonNameFr = document.querySelector(".pokePokemonTextFR")
    let pokemonNameJP = document.querySelector(".pokePokemonTextJP")
    let pokedexTextSpan = document.querySelector(".pokePokemonDexSpan");
    let pokemonImage = document.querySelector(".pokePokemonImage");
    let guessFill = document.querySelectorAll(".guessModeButtonFill");

function guessModeAnswers() { //

    console.log(guessFill)
    /*if(document.querySelector(".showAnswersBox").classList.contains("false")) {
        void(0)
    }*/
    if(document.querySelector("#genButtonFill").classList.contains("guessModeOn")) {
        genTextSpan.classList.add("hidden") 
        console.log("gen hidden")

    } 
    if(document.querySelector("#typeButtonFill").classList.contains("guessModeOn")) {
        pokemonType1.classList.add("hidden")
        pokemonType2.classList.add("hidden")  
        console.log("types hidden")
    } 
    
    
    
    if(document.querySelector("#nameButtonFill").classList.contains("guessModeOn")) {
        pokemonNameEn.classList.add("hidden")
        pokemonNameDe.classList.add("hidden")
        pokemonNameJP.classList.add("hidden")
        pokemonNameFr.classList.add("hidden")
        //pokemonNameEs.classList.add("hidden")
        console.log("name hidden")

    } 
    
    if(document.querySelector("#dexButtonFill").classList.contains("guessModeOn")) {
        pokedexTextSpan.classList.add("hidden")
        console.log("pokdex hidden")

    } 
    
    if(document.querySelector("#imageButtonFill").classList.contains("guessModeOn")) {
        pokemonImage.classList.add("hidden")
        console.log("image hidden")

    }
       
    
    


}

 function showAnswer() { // Funktion för att visa svaren genom classlist.remove
    genTextSpan.classList.remove("hidden") 
    pokemonType1.classList.remove("hidden")
    pokemonType2.classList.remove("hidden")   
    pokemonNameEn.classList.remove("hidden")
    pokemonNameDe.classList.remove("hidden")
    pokemonNameJP.classList.remove("hidden")
    pokemonNameFr.classList.remove("hidden")
    //pokemonNameEs.classList.remove("hidden")
    pokedexTextSpan.classList.remove("hidden")
    pokemonImage.classList.remove("hidden")

    

 }   
  let smashClicks = 0;
  let passClicks = 0;
  let totalClicks = smashClicks + passClicks;

// Click Counter Function 
function clickSmashCounter() {
    smashClicks += 1;
    console.log(smashClicks)
    document.querySelector(".smashCounter > p").innerHTML = smashClicks;    
    smashPassTotal();
    getRandomPokemon();

}
function clickPassCounter() {
    passClicks += 1;
    console.log(passClicks)
    document.querySelector(".passCounter > p").innerHTML = passClicks;
    getRandomPokemon();
    smashPassTotal();
}
function smashPassTotal() {
    totalClicks += 1;
    document.querySelector(".totalClicksCounter").innerHTML = totalClicks;

}


/**
 * Här är funktionen för knappanimation
 * Vi återanvänder vår buttonAnimation-function fråm projektet DrumKit
 * Kräver css-klassen
 *   .pressed {
    box-shadow: 0 3px 4px 0 #dbedf3;
    opacity: 0.5;
  }
 * DRY = Don´t Repeat Yourself
 */
function buttonAnimation() {
    let activeButton = document.querySelector("#getNewCatFact");
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}