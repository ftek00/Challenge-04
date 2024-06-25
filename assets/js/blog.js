const toggleModeBtn = document.getElementById("toggleMode");
const backButton = document.getElementById("backButton");

toggleModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

backButton.addEventListener("click", function () {
  window.location.href = "index.html";
});
