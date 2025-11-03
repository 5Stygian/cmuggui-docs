const collapsible = document.getElementById("collapsible");
const collapsibleInner = collapsible.innerHTML;
let isCollapsed = false;
collapsible.addEventListener("click", function() {
  if (isCollapsed == false) {
    collapsibleInner.style.display = block;  
  }
  if (isCollapsed == true) {
    collapsibleInner.style.display = none;
  }
});
