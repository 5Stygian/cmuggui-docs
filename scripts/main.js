// syntax highlighting
const highlight = document.getElementById("highlight");
const highlightText = highlight.innerHTML
const keywords1 = ['self', 'None', 'True', 'False'];
for (let i = 0; i < keywords1; i++) {
  let newText = highlightText.replace(new RegExp(keywords[i], 'g'), '<span style="color:;">')
}
