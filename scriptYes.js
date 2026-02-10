const heartContainer = document.getElementById("hearts");
const HEART_COUNT = 12;

for (let i = 0; i < HEART_COUNT; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const left = Math.random() * 100;
  const scale = Math.random() * 0.6 + 0.4;
  const duration = Math.random() * 4 + 4;
  const swayDuration = Math.random() * 3 + 2;
  const delay = Math.random() * 5;

  heart.style.left = `${left}%`;
  heart.style.transform = `scale(${scale})`;
  heart.style.animationDuration = `${duration}s, ${swayDuration}s`;
  heart.style.animationDelay = `${delay}s`;

  heartContainer.appendChild(heart);
}