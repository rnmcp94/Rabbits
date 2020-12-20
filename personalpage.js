

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var headerElement = document.getElementsByTagName("header");

    var bodyElement = document.getElementsByTagName("body")[0];

var darkModeButton = document.getElementById('darkModeButton')

var darkModeEnabled = true;

function applyDarkMode() {
  darkModeButton.style.background="lightgray";
  darkModeButton.style.color="black";
  darkModeButton.style.border="black";
  bodyElement.style.background="linear-gradient(to bottom, #B653BD, #84D0DF)";
  lightModeButton.style.background = "lightgray";
  lightModeButton.style.color = "black";
  lightModeButton.style.border="black";

}
function applyLightMode() {
  lightModeButton.style.background="lightgray";
  lightModeButton.style.color="black";
  lightModeButton.style.border="black";
  bodyElement.style.background="linear-gradient(to top, #B653BD, #84D0DF)";
  darkModeButton.style.background = "lightgray";
  darkModeButton.style.color = "black";
  darkModeButton.style.border="black";
}
darkModeButton.addEventListener("click", applyDarkMode);
lightModeButton.addEventListener("click", applyLightMode)
