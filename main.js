const boxAnimate = document.querySelector("#boxAnimate");
const box2Animate = document.querySelector("#box2Animate");
const box3Animate = document.querySelector("#box3Animate");
const box4Animate = document.querySelector("#box4Animate");
const box5Animate = document.querySelector("#box5Animate");
const box6Animate = document.querySelector("#box6Animate");
const box = document.querySelector("#boxTile");
const box2 = document.querySelector("#boxTile2");
const box3 = document.querySelector("#boxTile3");
const box4 = document.querySelector("#boxTile4");
const box5 = document.querySelector("#boxTile5");
const box6 = document.querySelector("#boxTile6");

function fartBox(boxSelection){
    if(boxSelection.dataset.active == "active"){
        boxSelection.classList.remove("box-hide");
        boxSelection.setAttribute("data-active" , "inactive");
        displayShow(boxSelection);
    } else{
        boxSelection.classList.add("box-hide");
        boxSelection.setAttribute("data-active" , "active");
        setTimeout(() => displayHide(boxSelection), 400);
    }
    
}

function displayHide(boxSelection){
    boxSelection.classList.add("display-hide");
    boxSelection.classList.remove("display-show");
}

function displayShow(boxSelection){
    boxSelection.classList.remove("display-hide");
    boxSelection.classList.add("display-show");
}

boxAnimate.addEventListener("click", function(){
    fartBox(box);
});

box2Animate.addEventListener("click", function(){
    fartBox(box2);
});

box3Animate.addEventListener("click", function(){
    fartBox(box3);
});

box4Animate.addEventListener("click", function(){
    fartBox(box4);
});

box5Animate.addEventListener("click", function(){
    fartBox(box5);
});

box6Animate.addEventListener("click", function(){
    fartBox(box6);
});