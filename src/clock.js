const clock = document.querySelector("#clock");

function setTime() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");

    const resultStr = `${hour}:${min}`;
    clock.innerText = resultStr;
}

setTime();
setInterval(setTime, 1000);