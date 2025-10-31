// syntax highlighting
const highlight = document.getElementById("highlight");
let highlightContent = highlight.innerHTML;
const keywords1 = ['self', 'None', 'True', 'False'];
let newText;
for (let i = 0; i < keywords1.length; i++) {
    newText = highlightContent.replace(new RegExp(keywords1[i], 'g'), `<span style="color:oklch(0.5009 0.2245 351.69);">${keywords1[i]}</span>`);
    console.log(newText);
}
highlightContent = newText;