const form = document.querySelector("#login-form");
const span = document.querySelector("#login-span");
const input = document.querySelector("#login-input");
const existUser =  localStorage.getItem("userName");

function submit(event) {
    event.preventDefault();
    const inputValue = input.value;

    userlogin(inputValue);

    localStorage.setItem("userName", inputValue);
}

function userlogin(inputValue) {
    span.innerText = `HELLO [${inputValue}] !`;

    span.className = "";
    input.className = "hidden";
}

if (existUser !== null) {
    userlogin(existUser);
}

form.addEventListener("submit", submit);