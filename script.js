const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click",() => {
  question.innerHTML = "Say 'Ready' in chat for the surprise";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY =window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(math.random() * maxX);
    const randomY = Math.floor(math.random() * MaxY);

    noBtn.computedStyleMap.left = randomX + "px";
    noBtn.computedStyleMap.top = randomY + "px";
});