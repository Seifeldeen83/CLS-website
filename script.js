/* Typing effect */
const text = "Capital Language Schools";
let index = 0;
const typing = document.getElementById("typingText");

function typeEffect() {
  if (index < text.length) {
    typing.textContent += text[index++];
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

/* Theme toggle */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function updateThemeIcon() {
  themeIcon.textContent = document.body.classList.contains("light")
    ? "🌙"
    : "☀️"
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  updateThemeIcon();
});

// ensure correct icon on load
updateThemeIcon();

/* Gallery */
function openImage(src) {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeImage() {
  document.getElementById("modal").style.display = "none";
}

/* Popup animation */
setTimeout(() => {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
  requestAnimationFrame(() => {
    popup.style.opacity = "1";
    popup.style.transform = "translateY(0) scale(1)";
  });
}, 2500);

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.opacity = "0";
  popup.style.transform = "translateY(20px) scale(0.95)";

  setTimeout(() => {
    popup.style.display = "none";
  }, 400);
}

/* Scroll reveal */
const sections = document.querySelectorAll(".section");
const reveal = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
};

let lastScroll = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 120) {
    nav.classList.add("hide"); // scrolling down
  } else {
    nav.classList.remove("hide"); // scrolling up
  }

  lastScroll = currentScroll;
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 8;
    const rotateY = ((x / rect.width) - 0.5) * -8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

window.addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", window.scrollY > 60);
});

document.querySelector(".main-btn").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelectorAll("button").forEach(btn => {
  btn.classList.add("button-ripple");

  btn.addEventListener("click", e => {
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - btn.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - btn.offsetTop - radius}px`;

    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "0.8s ease";
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", reveal);
reveal();

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 400);
});