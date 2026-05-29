// LOGIN POPUP AFTER 5 SECONDS
setTimeout(() => {

    document.getElementById("loginPopup").style.display = "flex";

}, 5000);


// LOGIN BUTTON ACTION WITH VALIDATION
document.addEventListener("DOMContentLoaded", function(){

    let loginForm = document.querySelector(".login-popup form");

    if(loginForm){

        loginForm.addEventListener("submit", function(e){

            e.preventDefault();

            let email = document.querySelector("input[name='email']").value.trim();

            let password = document.querySelector("input[name='password']").value.trim();

            let role = document.querySelector("select[name='role']").value;

            // VALIDATE FIELDS
            if(!email || !password){

                alert("Please fill in all fields!");

                return false;

            }

            // VALIDATE EMAIL FORMAT
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!emailRegex.test(email)){

                alert("Please enter a valid email address!");

                return false;

            }

            // VALIDATE PASSWORD LENGTH
            if(password.length < 4){

                alert("Password must be at least 4 characters!");

                return false;

            }

            // SHOW SUCCESS MESSAGE
            alert("Welcome " + role + "! Logging you in...");

            // SUBMIT THE FORM
            loginForm.submit();

        });

    }

});


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