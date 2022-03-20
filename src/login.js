const USER_NAME = "userName";
const form = document.querySelector("#login-form");
const loginCon = document.querySelector("#login-con");
const span = document.querySelector("#login-span");
const input = document.querySelector("#login-input");
const logoutBtn = document.querySelector("#logout-btn");
const existUser =  localStorage.getItem(USER_NAME);

function submit(event) {
    event.preventDefault();
    const inputValue = input.value;

    userlogin(inputValue);

    localStorage.setItem(USER_NAME, inputValue);
}

function userlogin(inputValue) {
    span.innerText = `HELLO [${inputValue}] !`;

    loginCon.className = "";
    input.className = "hidden";
}

if (existUser !== null) {
    userlogin(existUser);
}

function userlogOut() {
    localStorage.removeItem(USER_NAME);
    window.location.reload();
}

form.addEventListener("submit", submit);
logoutBtn.addEventListener("click", userlogOut);