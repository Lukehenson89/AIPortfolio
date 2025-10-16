// Modal Script
const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactBtn");
const span = document.getElementsByClassName("closeBtn")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
