
function showPage(id) {
  document.querySelectorAll(".page-section").forEach(function(page) {
    page.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function closePage() {
  document.querySelectorAll(".page-section").forEach(function(page) {
    page.classList.remove("active");
  });
}
showPage("home");