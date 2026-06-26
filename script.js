// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// TABS (Jobs, Admit Card, Results को बदलने के लिए)
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

  button.addEventListener("click", () => {

    // REMOVE ACTIVE CLASS
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // ADD ACTIVE CLASS TO CLICKED BUTTON
    button.classList.add("active");

    // SHOW CORRESPONDING CONTENT
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");

  });

});
