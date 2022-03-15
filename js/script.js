
const body = document.body;


const hamburgerToggler = document.querySelector(".toggler");


hamburgerToggler.addEventListener("change", (e) => {
  e.target.checked
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "scroll");
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


