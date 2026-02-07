// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    const rect = noBtn.getBoundingClientRect();

    // Current translate values (if already moved before)
    const currentTransform = getComputedStyle(noBtn).transform;
    let currentX = 0, currentY = 0;

    if (currentTransform !== "none") {
        const matrix = currentTransform.match(/matrix.*\((.+)\)/)[1].split(", ");
        currentX = parseFloat(matrix[4]);
        currentY = parseFloat(matrix[5]);
    }

    let newX = currentX + moveX;
    let newY = currentY + moveY;

    // Viewport boundaries
    const minX = -rect.left;
    const maxX = window.innerWidth - rect.right;
    const minY = -rect.top;
    const maxY = window.innerHeight - rect.bottom;

    // Clamp movement
    newX = Math.max(minX, Math.min(newX, maxX));
    newY = Math.max(minY, Math.min(newY, maxY));

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
});
// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

});
