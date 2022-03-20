const backgroundArr = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
];

const body = document.body;

const backgroundArrLength = backgroundArr.length;
const randomBg = backgroundArr[Math.floor(Math.random() * backgroundArrLength)];

body.style.backgroundImage = `url('src/img/${randomBg}')`;
