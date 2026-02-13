const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const mainImage = document.getElementById("mainImage");

let yesScale = 1;
let noScale = 1;
let triggered = false;

yesBtn.addEventListener("click", function () {
  alert("Yayyyyy 💕");
});

noBtn.addEventListener("mouseover", function () {

  noBtn.style.position = "fixed";

  const padding = 10;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  yesScale += 0.6;
  yesBtn.style.transform = `scale(${yesScale})`;

  noScale -= 0.08;
  if (noScale > 0.2) {
    noBtn.style.transform = `scale(${noScale})`;
  }

  if (yesScale >= 3 && !triggered) {
    triggered = true;
    rainHearts();

    mainImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxTcLHuBuo7tJik0UwbAl3CBkqAlm9RETOQ&s";
    
  question.classList.add("shake");
}
});

function rainHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-50px";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heart.style.animation = "fall 3s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

const question = document.getElementById("question");
