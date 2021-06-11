//Display Product Summary on cart Page
const name1 = localStorage.getItem("name")
const color = localStorage.getItem("color")
const size = localStorage.getItem("size")
const qty = localStorage.getItem("qty")
const uprice = localStorage.getItem("price")

const applyBtn = document.getElementById("apply") 

document.getElementById("name-col").innerHTML = name1
document.getElementById("color-col").innerHTML = "Color: " + color
document.getElementById("size-col").innerHTML = "Size: "+ size
document.getElementById("qty-col").textContent = qty
document.getElementById("item-number").textContent = qty + " Items"
document.getElementById("uprice-col").innerHTML = uprice

let priceNum = Number(uprice.slice(1))
let qtyNum = Number(qty)
let total = priceNum * qtyNum //get total price

document.getElementById("tprice-col").innerHTML = "$" + total
document.getElementById("subtotal").innerHTML = "$" + total

let deliveryCost = Number(document.getElementById("delivery").textContent.slice(1)) //get delivery cost
let gtotal = total + deliveryCost
document.getElementById("gtotal").innerHTML = "$" + gtotal

let promoVal = 0.5*total
let gtotalWithPromo = gtotal - promoVal 


//Promo Code
applyBtn.onclick = function() {
    let code = document.getElementById("promo-code").value
    if (code == "aw223") {
        document.getElementById("discount").innerHTML = "-$"+ promoVal
        document.getElementById("discount").style.visibility = "visible"
        document.getElementById("gtotal").innerHTML = "$" + gtotalWithPromo
        return code
    }
}

//increments quantity
function incrementValue()
{
    var value = document.getElementById("qty-col").textContent;
    value = isNaN(value) ? 1 : value;
    value++;
    if (value <= 20)  
   { 
        document.getElementById("qty-col").textContent = value;
        document.getElementById("item-number").textContent = value+ " items";
        qtyNum = Number(value)
        total = priceNum * qtyNum //get new total price
        gtotal = total + deliveryCost
        promoVal = 0.5*total
        gtotalWithPromo = gtotal - promoVal 

        document.getElementById("tprice-col").innerHTML = "$" + total
        document.getElementById("subtotal").innerHTML = "$" + total
        document.getElementById("gtotal").innerHTML = "$" + gtotal
        if(document.getElementById("discount").textContent !== "None")
        {
            document.getElementById("discount").innerHTML = "-$"+ promoVal
            document.getElementById("gtotal").innerHTML = "$" + gtotalWithPromo
        }
    }

}

//decrements quantity
function decrementValue()
{
    var value = document.getElementById("qty-col").textContent;
    value = isNaN(value) ? 1 : value;
    value--;
    if (value >= 1)  
    { 
        document.getElementById("qty-col").textContent = value;
        qtyNum = Number(value)
        total = priceNum * qtyNum //get new total price
        gtotal = total + deliveryCost
        promoVal = 0.5*total
        gtotalWithPromo = gtotal - promoVal 

        document.getElementById("tprice-col").innerHTML = "$" + total
        document.getElementById("subtotal").innerHTML = "$" + total
        document.getElementById("gtotal").innerHTML = "$" + gtotal
        if(document.getElementById("discount").textContent !== "None")
        {
            document.getElementById("discount").innerHTML = "-$"+ promoVal
            document.getElementById("gtotal").innerHTML = "$" + gtotalWithPromo
        }
    }
}

// Get the delete confirmation box
var confirm = document.getElementById("confirm-delete")

// Get the button (icon) that opens the delete confirmation box
var btn = document.getElementById("delete-icon")

// Get the <span> element that closes the delete confirmation box
var span = document.getElementsByClassName("close2")[0]

//Get 'Yes' button after opening the delete confirmation box
var yes = document.getElementById("yes")

//Get 'No' button after opening the delete confirmation box
var no = document.getElementById("no")

// When the user clicks the button, open the delete confirmation box 
btn.onclick = function() {
  confirm.style.display = "block"
}

// When the user clicks on <span> (x), close the delete confirmation box
span.onclick = function() {
  confirm.style.display = "none"
}

//When the user clicks on 'Yes', remove product
yes.onclick = function() {
    confirm.style.display = "none"
    document.getElementById("name-col").style.visibility = "hidden"
    document.getElementById("color-col").style.visibility = "hidden" 
    document.getElementById("size-col").style.visibility = "hidden" 
    document.getElementById("qty-col").style.visibility = "hidden" 
    document.getElementById("uprice-col").style.visibility = "hidden"
    document.getElementById("tprice-col").style.visibility = "hidden"
    document.getElementById("subtotal").style.visibility = "hidden"
    document.getElementById("gtotal").style.visibility = "hidden"
    document.getElementById("discount").style.visibility = "hidden"
    document.getElementById("delivery").style.visibility = "hidden"
    document.getElementById("gtotal").style.visibility = "hidden"
}

    //When the user clicks on 'No', remove product
no.onclick = function() {
    confirm.style.display = "none"
}

    function toPayment () {
        location.href = "payment.html"
}
