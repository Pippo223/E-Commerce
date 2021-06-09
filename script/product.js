const modal = document.getElementById("myModal");
const addToCart = document.getElementById("add-to-cart");
const span = document.getElementsByClassName("close")[0];
const chkout = document.getElementById("checkout")

// When the user clicks on the button, open the modal
addToCart.onclick = function() {

if (document.getElementsByClassName("size").textContent === undefined )
    {
     alert("Select Size") 
    } 
else
    {
        const pname = document.getElementById("pname").textContent
        const pprice = document.getElementById("pprice").textContent
        const pcolor = document.getElementById("color-text").textContent
        const psize = document.getElementsByClassName("size").textContent
        const qty = document.getElementById("qty-input").value


        document.getElementById("summary-image").src = document.getElementById("main-image").src
        document.getElementById("summary-pname").textContent = pname
        document.getElementById("summary-pprice").textContent = pprice
        document.getElementById("summary-pcolor").textContent = "Color: " + pcolor
        document.getElementById("summary-psize").textContent = "Size: " + psize
        document.getElementById("summary-pqty").textContent = "Qty: " + qty
 
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }

//Store product summary in local storage and go to cart page
chkout.onclick = function() {
    localStorage.setItem("name", document.getElementById("pname").textContent)
    localStorage.setItem("price", document.getElementById("pprice").textContent)
    localStorage.setItem("color", document.getElementById("color-text").textContent)
    localStorage.setItem("size", document.getElementsByClassName("size").textContent)
    localStorage.setItem("qty", document.getElementById("qty-input").value)
    
    location.href = "extra/cart.html"
}

//increments quantity
function incrementValue()
{
    var value = document.getElementById("qty-input").value;
    value = isNaN(value) ? 1 : value;
    value++;
    if (value <= 20)  
    document.getElementById("qty-input").value = value;
    
}

//decrements quantity
function decrementValue()
{
    var value = document.getElementById("qty-input").value;
    value = isNaN(value) ? 1 : value;
    value--;
    if (value >= 1)  
    document.getElementById("qty-input").value = value;
}

//Change Cleat Color
function changeToRed() {
    document.getElementById("color-text").textContent = "Red"
    document.getElementById("main-image").src = "images/Nike/Tiempo/red2.jpg" 
    document.getElementById("sub-image1").src = "images/Nike/Tiempo/red.jpg"
    document.getElementById("sub-image2").src = "images/Nike/Tiempo/red1.jpg"
}

function changeToBlack() {
    document.getElementById("color-text").textContent = "Black" 
    document.getElementById("main-image").src = "images/Nike/Tiempo/black.jpg" 
    document.getElementById("sub-image1").src = "images/Nike/Tiempo/black2.jpg"
    document.getElementById("sub-image2").src = "images/Nike/Tiempo/black1.jpg"
}

function changeToWhite() {
    document.getElementById("color-text").textContent = "White"
    document.getElementById("main-image").src = "images/Nike/Tiempo/white.jpg" 
    document.getElementById("sub-image1").src = "images/Nike/Tiempo/white1.jpeg"
    document.getElementById("sub-image2").src = "images/Nike/Tiempo/white2.jpeg"
}


function changeToYellow() {
    document.getElementById("color-text").textContent = "Yellow"
    document.getElementById("main-image").src = "images/Nike/Tiempo/yellow.jpg" 
    document.getElementById("sub-image1").src = "images/Nike/Tiempo/yellow1.jpg"
    document.getElementById("sub-image2").src = "images/Nike/Tiempo/yellow2.jpg"
}

//Get Cleat Size
function getSize41 () {
    document.getElementsByClassName("size").textContent = "41"
}

function getSize42 () {
    document.getElementsByClassName("size").textContent = "42"
}

function getSize43 () {
    document.getElementsByClassName("size").textContent = "43"
}

function getSize44 () {
    document.getElementsByClassName("size").textContent = "44"
}

function getSize45 () {
    document.getElementsByClassName("size").textContent = "45"
}


