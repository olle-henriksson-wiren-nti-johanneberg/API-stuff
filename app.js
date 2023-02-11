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

function getRandomPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1300") //För att ta all pokemon data!
    .then (function (response) {
        return response.json();
    })
    .then((response) => {
        let data = response;
        console.log(data);

        let rng = data.results[Math.floor(Math.random() * data.results.length)];
        
        document.querySelector(".pokePokemonText").innerHTML = rng.name;
        fetch(rng.url) // To fetch the image of said pokémon
        .then (function (response){
            return response.json();
        })
        .then((response) => {
            let data2 = response;

            let genTextSpan = document.querySelector(".genTextSpan")
            let pokemonType1 = document.querySelector(".slot1")
            let pokemonType2 = document.querySelector(".slot2")
            
            if (document.querySelector(".guessModeButtonFill").classList.contains("guessModeOn")) {
                guessModeAnswers(); 
            }

            console.log(data2);
            console.log(data2.sprites.front_default)
            console.log(data2.types[0].type.name)
            document.querySelector(".pokePokemonImage").src = data2.sprites.front_default
            document.querySelector(".slot1").id = data2.types[0].type.name
            document.querySelector("#" + data2.types[0].type.name).innerHTML = data2.types[0].type.name

            if (data2.types[1] != undefined) {
                document.querySelector(".slot2").id = data2.types[1].type.name
                document.querySelector("#" + data2.types[1].type.name).innerHTML = data2.types[1].type.name
            } else {
                document.querySelector(".slot2").innerHTML = " ";
                document.querySelector(".slot2").id = "noType"
            }
        fetch(data2.species.url) // För att hitta species datan, används under för att ta fram OG generation
        .then (function(response) {
            return response.json();
        })
        .then((response) => {
            let data3 = response;
            

            console.log(data3)
            console.log(data3.generation.name)
            console.log(data3.names[0].name)
            document.querySelector(".genTextSpan").innerHTML = data3.generation.name //Retrieve Generation
            document.querySelector(".pokePokemonTextJP").innerHTML = data3.names[0].name // To retrieve name in JP
            document.querySelector(".pokePokemonTextDE").innerHTML = data3.names[5].name  //German Name

            document.querySelector(".pokePokemonDex").innerHTML = "National Dex Number: " + "<span class=pokePokemonDexSpan>" + data3.pokedex_numbers[0].entry_number + "</span>" // För att få fram nationaldex numret
            
            if (data3.flavor_text_entries[0] != undefined) { //Enter other text if there is no flavor text
                document.querySelector(".pokeFlavorText").innerHTML = data3.flavor_text_entries[0].flavor_text;
            } else if (data3.generation.name = "generation-v"){
                document.querySelector(".pokeFlavorText").innerHTML = data3.flavor_text_entries[1].flavor_text;
                console.log("gen 5 flavor")
            } else {
                document.querySelector(".pokeFlavorText").innerHTML = "No description available. :/";
            }

            /*if (document.querySelector(".genTextSpan").innerHTML = "generation-v" ) {
                console.log("gen5 flavor")
                document.querySelector(".pokeFlavorText").innerHTML = data3.flavor_text_entries[1].flavor_text;
                
            }
            if (document.querySelector(".genTextSpan").innerHTML = "generation-vii" ) {
                console.log("gen7 flavor")
                document.querySelector(".pokeFlavorText").innerHTML = data3.flavor_text_entries[7].flavor_text;
            }*/
            
        })
        })   
                 
       
    }) 
}

function guessModeButton() { // To toggle the fill on button
    document.querySelector(".guessModeButtonFill").classList.toggle("guessModeOn")
}
// För att dölja och visa // Guess Mode
function guessModeAnswers() { //
    let genTextSpan = document.querySelector(".genTextSpan")
    let pokemonType1 = document.querySelector(".slot1")
    let pokemonType2 = document.querySelector(".slot2")

    console.log("guessModeBUtton Toggled")
    genTextSpan.classList.add("hidden") 
    pokemonType1.classList.add("hidden")
    pokemonType2.classList.add("hidden")    

}

 function showAnswer() { // Funktion för att visa svaren genom classlist.remove
    let genTextSpan = document.querySelector(".genTextSpan")
    let pokemonType1 = document.querySelector(".slot1")
    let pokemonType2 = document.querySelector(".slot2")

    genTextSpan.classList.remove("hidden") 
    pokemonType1.classList.remove("hidden")
    pokemonType2.classList.remove("hidden")   
 }
// Types Functions



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