// this code is from W3
const coll = document.getElementsByClassName("collapsible");
coll.innerHTML = "Show";

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      coll.innerHTML = "Hide";
    } else {
      content.style.display = "block";
      coll.innerHTML = "Show";
    }
  });
}
