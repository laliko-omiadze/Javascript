'use strict'

let username1=document.getElementById ('username');

function usernamevalidation() {
let usernamevalue=document.getElementById ('username').value
let regex = /^[0-9A-Za-z]{6,16}$/;
let usernameError=document.querySelector('.error-username');
if (usernamevalue.match(regex)){
    usernameError.innerText='your username is valid';
    usernameError.style.color = "green";
}else {usernameError.innerText='your username is not valid';
usernameError.style.color = "red"};
if (usernamevalue===''){usernameError.innerText=''};

}
username1.addEventListener('keyup',usernamevalidation);