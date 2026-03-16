const password = document.getElementById("password");
const strengthText = document.getElementById("strength");
const bar = document.getElementById("strength-bar-fill");
const toggle = document.getElementById("toggle");

const lengthRule = document.getElementById("length");
const lowerRule = document.getElementById("lower");
const upperRule = document.getElementById("upper");
const numberRule = document.getElementById("number");
const symbolRule = document.getElementById("symbol");

toggle.onclick = function(){

if(password.type === "password"){
    password.type = "text";
    toggle.textContent = "🙈";
}else{
    password.type = "password";
    toggle.textContent = "👁";
}

}

password.addEventListener("input",function(){

let val = password.value;
let strength = 0;

if(val.length >= 8){
    strength++;
    lengthRule.classList.add("valid");
}else{
    lengthRule.classList.remove("valid");
}

if(/[a-z]/.test(val)){
    strength++;
    lowerRule.classList.add("valid");
}else{
    lowerRule.classList.remove("valid");
}

if(/[A-Z]/.test(val)){
    strength++;
    upperRule.classList.add("valid");
}else{
    upperRule.classList.remove("valid");
}

if(/[0-9]/.test(val)){
    strength++;
    numberRule.classList.add("valid");
}else{
    numberRule.classList.remove("valid");
}

if(/[^A-Za-z0-9]/.test(val)){
    strength++;
    symbolRule.classList.add("valid");
}else{
    symbolRule.classList.remove("valid");
}

if(strength <= 2){
    strengthText.innerHTML="Weak";
    bar.style.width="33%";
    bar.style.background="red";
}
else if(strength <=4){
    strengthText.innerHTML="Medium";
    bar.style.width="66%";
    bar.style.background="orange";
}
else{
    strengthText.innerHTML="Strong";
    bar.style.width="100%";
    bar.style.background="green";
}

});