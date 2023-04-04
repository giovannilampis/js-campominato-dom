"use strict"

// get the #play element in html

const play = document.getElementById("play");

// Bomb locations are contained in an Array

let bombs = [];

// what happens when we click play ?

play.addEventListener("click", function() {

    // get the .score element in html

    let scoreHtml = document.querySelector(".score");

    // get the #minefield element in html

    let minefield = document.getElementById("minefield");

    // reset minefield on click to play

    minefield.innerHTML = '';

    // get the select element from html

    const level = parseInt(document.getElementById("level").value);

    // an array containns the  bombs made

    bombs = makeBombs(level);

    // for cycle

    for(let i = 1; i <= level; i++) {

        minefield.append( createHtmlElement( "div", "cell", i ) );

          //  each item will be clickable

    }

})

// a function can create a generic html element with some certain classes

function createHtmlElement(htmlTag, classes, text){

    let element = document.createElement( htmlTag );

    element.className = classes;

    // get the select element from html

    const level = parseInt(document.getElementById("level").value);

    // there will be differences depending on the difficulty level chosen

    switch(level) {

        // level beginner

        case 100:
           element.classList.add("beginner-cell");
           break;

        // level advanced

        case 81:
             element.classList.add("advanced-cell");
             break;

        // level pro

         case 49:
             element.classList.add("pro-cell");
     }

     element.addEventListener("click", function() {


        if ( !bombs.includes(text) ) {

            this.classList.add("azure");

            // when clicked, the element will show a text

            this.innerHTML = text;

        } else {

            this.innerHTML = `<i class="fa-solid fa-bomb fa-spin fa-spin-reverse" style="color: #e53010;"></i>`;

        }

    })

    return element;

}

// get :root element

const r = document.querySelector(":root")

// creating a function to set a variable value

function myFunction_set() {

    // set the value of variable --x to another variable --y
    r.style.setProperty("--background", "rgb(47,79,79)");
    r.style.setProperty("--head-foot", "rgb(240,230,140)");
    r.style.setProperty("--black", "rgb(240,230,140)");
}

// function aimed at making bombs
function makeBombs(bombsNumber){

    const bombContainer = [];

    // make 16 bombs

    while ( bombContainer.length < 16 ) {

        let bomb = randomNumber(1, bombsNumber);

        if ( !bombContainer.includes( bomb )) {

            bombContainer.push( bomb );
        }
    }
    console.log(bombContainer);

    return bombContainer;

}

// function aimed at creating random numbers 
// between a minimum and a maximum number

function randomNumber (min,max) {
  return Math.floor (Math.random ()* (max-min+1)+min);
}

// dark mode controller variable

let darkMode = false;

document.getElementById("dark-mode").addEventListener("click", function() {
    
    if( !darkMode ) {

        myFunction_set();

        darkMode = true;

    } else {

        r.style.setProperty("--background", "rgb(131, 254, 208)");
        r.style.setProperty("--head-foot", "rgb(255, 255, 255)");
        r.style.setProperty("--black", "rgb(12, 12, 12)");

        darkMode = false;
    
    }

})