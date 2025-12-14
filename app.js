const btn = document.querySelector("button");
const resultBox = document.querySelector("p");

// fortuns
const fortun1 =
  "امروز خیلی حسود دورت هستن، بالاخره معروف بودن بدی های خودشم داره 😏";
const fortun2 = "قراره پول دار شی یه امروز  😏";
const fortun3 = "امروز روز خوبی میشه برات اتفاق های خوبی در راهه 🥗";
const fortun4 = "رنگ سیاه رو ازش دوری نکن قراره قدرتت زیاد شه باهاش 😎";
const fortun5 = "امروز بهترین درس خوندن زندگیت میشه 🥗";

// function

const genrateRandomNumber = () => Math.floor(Math.random() * (6 - 1) + 1);

// events
btn.addEventListener("click", () => {
  const randomNum = genrateRandomNumber();
  if (randomNum === 1) resultBox.textContent = fortun1;
  if (randomNum === 2) resultBox.textContent = fortun2;
  if (randomNum === 3) resultBox.textContent = fortun3;
  if (randomNum === 4) resultBox.textContent = fortun4;
  if (randomNum === 5) resultBox.textContent = fortun5;
});
