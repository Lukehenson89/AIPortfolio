// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
    }
  });
});

// Reservation form validation
document.getElementById("reservation-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const size = document.getElementById("party-size").value;

  if (!name || !date || !time || !size) {
    alert("Please fill in all fields.");
  } else {
    alert(`Reservation confirmed for ${name} on ${date} at ${time} for ${size} people.`);
  }
});

// Lightbox
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <img src="${img.src}" alt="">
      <span class="close-btn">&times;</span>
    `;
    document.body.appendChild(lightbox);
    lightbox.querySelector(".close-btn").addEventListener("click", () => {
      document.body.removeChild(lightbox);
    });
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) document.body.removeChild(lightbox);
    });
  });
});
