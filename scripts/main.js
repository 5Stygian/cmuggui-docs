const collButton = document.getElementById("collapsibleButton");
const collCont = document.getElementById("collapsibleContent");
let isCollapsed = true;
collButton.addEventListener("click", function() {
  isCollapsed = !isCollapsed;
  if (isCollapsed == false) {
    collCont.style.display = block;
    collButton.innerHTML = "Show";
  }
  if (isCollapsed == true) {
    collCont.style.display = none;
    collButton.innerHTML = "Hide";
  }
});
