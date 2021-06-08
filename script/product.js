
function incrementValue()
{
    var value = document.getElementById("qty-input").value;
    value = isNaN(value) ? 1 : value;
    value++;
    if (value <= 20)  
    document.getElementById("qty-input").value = value;
    
}

function decrementValue()
{
    var value = document.getElementById("qty-input").value;
    value = isNaN(value) ? 1 : value;
    value--;
    if (value >= 1)  
    document.getElementById("qty-input").value = value;
}

function changeToRed() {
    document.querySelector("#main-image").src = "images/Nike/Tiempo/red2.jpg" 
    document.querySelector("#sub-image1").src = "images/Nike/Tiempo/red.jpg"
    document.querySelector("#sub-image2").src = "images/Nike/Tiempo/red1.jpg"
}

function changeToBlack() {
    document.getElementById("main-image").src = "images/Nike/Tiempo/black.jpg" 
    document.getElementById("sub-image1").src = "images/Nike/Tiempo/black2.jpg"
    document.getElementById("sub-image2").src = "images/Nike/Tiempo/black1.jpg"
}

function changeToWhite() {
    document.getElementById("main-image").src = "images/Nike/Tiempo/white.jpg" 
    document.getElementById("sub-image1").src = "images/Nike/Tiempo/white1.jpeg"
    document.getElementById("sub-image2").src = "images/Nike/Tiempo/white2.jpeg"
}


function changeToYellow() {
    document.getElementById("main-image").src = "images/Nike/Tiempo/yellow.jpg" 
    document.getElementById("sub-image1").src = "images/Nike/Tiempo/yellow1.jpg"
    document.getElementById("sub-image2").src = "images/Nike/Tiempo/yellow2.jpg"
}
