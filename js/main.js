"use strict";

/***************************
 * VARIABLES
 ****************************/

let photos = [ 
    {src: "1.jpg", legende:"Frères pandas"}, 
    {src: "2.jpg", legende:"Yoga on the top"},
    {src: "3.jpg", legende:"Lever de soleil"},
    {src: "4.jpg", legende:"Ciel étoilé"},
    {src: "5.jpg", legende:"Tea time"},
    {src: "6.jpg", legende:"Ca va péter le bide"}
    ];

    let state = new Object();
    const slider = document.querySelector("#slider img");
    const legende = document.querySelector("#slider figcaption");


/***************************
 * FONCTIONS
 ****************************/
function showMenu() {
    document.querySelector("ul").classList.toggle("hide");  
}

function showImage() {
    slider.src = "images/" + photos[state.index].src;
    legende.textContent = photos[state.index].legende;
}

function next() {     
    state.index++;
if(state.index > photos.length - 1) {
    state.index = 0;
   }
    slider.src = "images/" + photos[state.index].src;
    legende.textContent = photos[state.index].legende;   
}

function previous() {
    state.index--;
    if(state.index < 0) {
        state.index =  photos.length - 1;
    }
    slider.src = "images/" + photos[state.index].src;
    legende.textContent = photos[state.index].legende;   
}

function toggle() {
    if(state.timer == null) {
        state.timer = setInterval(next, 2000)
    } else {
        clearInterval(state.timer);
        state.timer == null;
    }
}

 /***************************
 * EVENT HANDLERS
 ****************************/
document.addEventListener("DOMContentLoaded", () => {
   state.index = 0;
   state.timer = null;
   document.querySelector("#toolbar-toggle").addEventListener("click", showMenu);
   showImage();
   document.querySelector("#slider-next").addEventListener("click", next);
   document.querySelector("#slider-previous").addEventListener("click", previous);
   document.querySelector("#slider-toggle").addEventListener("click", toggle);
})

    