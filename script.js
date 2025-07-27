const sections = document.querySelectorAll("section");
const buttons = document.querySelectorAll("nav button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section");

    sections.forEach((section) => {
      if (section.id === target) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
});

// Sayfa yüklendiğinde "about" bölümü aktif olsun
document.getElementById("about").classList.add("active");
