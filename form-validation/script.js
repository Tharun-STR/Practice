const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");

form.addEventListener("submit", function(e){

e.preventDefault();

let valid = true;

document.querySelectorAll(".error").forEach(el => el.innerText = "");


if(nameInput.value.trim() === ""){
nameInput.nextElementSibling.nextElementSibling.innerText = "Name is required";
valid = false;
}

let phonePattern = /^[0-9]{10}$/;

if(!phonePattern.test(phoneInput.value)){
phoneInput.nextElementSibling.nextElementSibling.innerText = "Enter valid 10 digit phone number";
valid = false;
}

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailPattern.test(emailInput.value)){
emailInput.nextElementSibling.nextElementSibling.innerText = "Enter valid email";
valid = false;
}

if(addressInput.value.trim() === ""){
addressInput.nextElementSibling.nextElementSibling.innerText = "Address cannot be empty";
valid = false;
}

if(valid){
alert("Form Submitted Successfully ✅");
form.reset();
}

});