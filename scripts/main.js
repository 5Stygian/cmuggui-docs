const collapsible = document.getElementById("collapsible");
const collapsibleInner = collapsible.innerHTML;

collapsible.addEventListener("click", function() {
  collapsibleInner.style.display = none;
});
