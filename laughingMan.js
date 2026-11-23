const firstSquare = document.querySelector("#square");

//positioning square
firstSquare.style.left = "225px";
firstSquare.style.top = "175px";

//alert for clicking
firstSquare.addEventListener(click, () => {
    alert("You have clicked");
});

