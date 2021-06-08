//Adidas Cleats
 /*const copa = {
    name: document.getElementById("copa-name").textContent,
    description: document.getElementById("copa-desc").textContent,
    price: document.getElementById("copa-price").textContent
} 

 const nemeziz = {
    name: document.getElementById("nemeziz-name").textContent,
     description: document.getElementById("nemeziz-desc").textContent,
     price: document.getElementById("nemeziz-price").textContent
 }
 const predator = {
    name: document.getElementById("predator-name").textContent,
    description: document.getElementById("predator-desc").textContent,
    price: document.getElementById("predator-pripredator").textContent
}
const X = {
    name: document.getElementById("X-name").textContent,
    description: document.getElementById("X-desc").textContent,
    price: document.getElementById("X-price").textContent
}

//Nike CLeats
const hypervenom = {
    name: document.getElementById("hypervenom-name").textContent,
    description: document.getElementById("hypervenom-desc").textContent,
    price: document.getElementById("hypervenom-price").textContent
}
const superfly = {
    name: document.getElementById("superfly-name").textContent,
    description: document.getElementById("superfly-desc").textContent,
    price: document.getElementById("superfly-price").textContent
}
const tiempo = {
    name: document.getElementById("tiempo-name").textContent,
    description: document.getElementById("tiempo-desc").textContent,
    price: document.getElementById("tiempo-price").textContent
}
const vapor = {
    name: document.getElementById("vapor-name").textContent,
    description: document.getElementById("vapor-desc").textContent,
    price: document.getElementById("vapor-price").textContent
}

//Puma Cleats
const future = {
    name: document.getElementById("future-name").textContent,
    description: document.getElementById("future-desc").textContent,
    price: document.getElementById("future-price").textContent
}
const king = {
    name: document.getElementById("king-name").textContent,
    description: document.getElementById("king-desc").textContent,
    price: document.getElementById("king-price").textContent
}
const one = {
    name: document.getElementById("one-name").textContent,
    description: document.getElementById("one-desc").textContent,
    price: document.getElementById("one-price").textContent
}
const ultra = {
    name: document.getElementById("ultra-name").textContent,
    description: document.getElementById("ultra-desc").textContent,
    price: document.getElementById("ultra-price").textContent
}

//others
const nb = {
    name: document.getElementById("nb-name").textContent,
    description: document.getElementById("nb-desc").textContent,
    price: document.getElementById("nb-price").textContent
}
const umbro1 = {
    name: document.getElementById("umbro1-name").textContent,
    description: document.getElementById("umbro1-desc").textContent,
    price: document.getElementById("umbro1-price").textContent
}
const kappa = {
    name: document.getElementById("kappa-name").textContent,
    description: document.getElementById("kappa-desc").textContent,
    price: document.getElementById("kappa-price").textContent
}
const umbro2 = {
    name: document.getElementById("umbro2-name").textContent,
    description: document.getElementById("umbro2-desc").textContent,
    price: document.getElementById("umbro2-price").textContent
} */

// function copaDetails() {
    
    
     
    
     
/* 
     function loc() { 
        const copa = {
            name: document.getElementById("copa-name").textContent,
            description: document.getElementById("copa-desc").textContent,
            price: document.getElementById("copa-price").textContent
        } 
        

        
        localStorage.setItem("cleat", JSON.stringify(copa))
        
       location.href = "extra/Product.html"

      JSON.parse(localStorage.getItem("cleat"))
      console.log(copa.name + " " + copa.description + " " +copa.price)
      $("#p-name" ).load("index.html #copa-name")


    //    document.getElementById("p-name").innerHTML = JSON.parse(localStorage.getItem("cleat"))

        
    } */
    
    // function disp() {
    //     const temp = loc()
    //     document.getElementById("p-name").innerHTML = temp
    //     console.log(temp)
    // }

   //}


   $(document).ready(function() {

    $("sub-div1").click(function() {
      
        $("#p-name").load("index.html #copa-name");
    });
  });



