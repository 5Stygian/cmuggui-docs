const currentURL = window.location.href;
if (currentURL == "https://cmuggui-docs.netlify.app/" || currentURL == "https://cmuggui-docs.netlify.app") {
  window.location.replace("https://cmuggui-docs.netlify.app/#introduction");
}

// this code is from W3
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
