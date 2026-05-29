// LOGIN POPUP AFTER 5 SECONDS
setTimeout(() => {

    document.getElementById("loginPopup").style.display = "flex";

}, 5000);


// CLOSE LOGIN POPUP WHEN CLICKING OUTSIDE
window.onclick = function(e){

    let popup = document.getElementById("loginPopup");

    if(e.target == popup){
        popup.style.display = "none";
    }

}


// PRODUCT ADD TO CART ALERT
document.addEventListener("click", function(e){

    if(e.target.classList.contains("btn-primary")){

        if(e.target.innerText.includes("Add")){

            alert("Product added to cart successfully!");

        }

    }

});


// DARK MODE TOGGLE
function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

}


// SEARCH PRODUCTS
function searchProducts(){

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title = card.querySelector(".card-title").innerText.toLowerCase();

        if(title.includes(input)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}


// SIMPLE CART COUNTER
let cartCount = 0;

document.addEventListener("click", function(e){

    if(e.target.innerText.includes("Add To Cart")){

        cartCount++;

        document.getElementById("cartCount").innerText = cartCount;

    }

});


// AUTO CHANGE HERO TEXT
const heroTexts = [

    "Fresh Farm Produce Delivered Nationwide",
    "Trusted Farmers Across Kenya",
    "Affordable Fresh Vegetables & Fruits",
    "Fast Delivery To Your Doorstep"

];

let index = 0;

setInterval(() => {

    index++;

    if(index >= heroTexts.length){

        index = 0;

    }

    let heroTitle = document.getElementById("heroTitle");

    if(heroTitle){

        heroTitle.innerText = heroTexts[index];

    }

}, 3000);


// FADE IN EFFECT ON SCROLL
window.addEventListener("scroll", () => {

    let elements = document.querySelectorAll(".card");

    elements.forEach(el => {

        let position = el.getBoundingClientRect().top;

        let screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){

            el.classList.add("show");

        }

    });

});


// CONTACT FORM VALIDATION
function validateForm(){

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let message = document.getElementById("message").value;

    if(name == "" || email == "" || message == ""){

        alert("Please fill all fields!");

        return false;

    }

    alert("Message submitted successfully!");

    return true;

}