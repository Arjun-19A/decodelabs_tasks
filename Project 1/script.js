const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (menuBtn.innerHTML === "☰") {
    menuBtn.innerHTML = "✖";
  } else {
    menuBtn.innerHTML = "☰";
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.innerHTML = "☰";
  });
});

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

const revealElements = document.querySelectorAll(
  ".card,.testimonial,.price-card,.stat,.hero-left,.hero-right,.dashboard",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.classList.add("fade");
  observer.observe(element);
});

const counters = document.querySelectorAll(".stat h2");

let counterStarted = false;

function animateCounters() {
  if (counterStarted) return;

  counterStarted = true;

  counters.forEach((counter) => {
    const text = counter.innerText;

    const number = parseInt(text.replace(/\D/g, ""));

    const suffix = text.replace(/[0-9]/g, "");

    let count = 0;

    const speed = number / 80;

    function update() {
      count += speed;

      if (count < number) {
        counter.innerText = Math.floor(count) + suffix;

        requestAnimationFrame(update);
      } else {
        counter.innerText = text;
      }
    }

    update();
  });
}

window.addEventListener("scroll", () => {
  const stats = document.querySelector(".stats");

  const trigger = stats.offsetTop - 400;

  if (window.scrollY > trigger) {
    animateCounters();
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();

  const email = form.querySelector("input[type='email']").value.trim();

  const message = form.querySelector("textarea").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields.");

    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Enter a valid email.");

    return;
  }

  alert("Thank you! Your message has been sent.");

  form.reset();
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "none",
  background: "#4f46e5",
  color: "#fff",
  cursor: "pointer",
  display: "none",
  fontSize: "20px",
  boxShadow: "0 10px 20px rgba(0,0,0,.2)",
  zIndex: "999",
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");

    const diameter = Math.max(this.clientWidth, this.clientHeight);

    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;

    circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;

    circle.style.top = `${e.clientY - this.offsetTop - radius}px`;

    circle.classList.add("ripple");

    const ripple = this.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    this.appendChild(circle);
  });
});

console.log("✅ TaskFlow AI Loaded Successfully");
