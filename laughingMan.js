const SQUARE_COUNT = 3;
const firstSquare = document.querySelector("#square");

// first square
//positioning square
firstSquare.style.left = "225px";
firstSquare.style.top = "175px";

//alert for clicking
firstSquare.addEventListener("click", () => {
    alert("You have clicked");
});

// other squares
let box = document.querySelector("#box");
for (let i = 0; i < SQUARE_COUNT; i++){
    let square = document.createElement("img");
    square.src = "laughing_man.jpg";
    square.alt = "Catch the laughing man";
    square.className = "square";
    square.style.left = "225px";
    square.style.top = "175px";
    box.appendChild(square);
};
