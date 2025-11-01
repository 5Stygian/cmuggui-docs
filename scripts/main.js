// syntax highlighting
const highlight = document.getElementById("highlight");
if (highlight) {
	let highlightContent = highlight.innerHTML;
	const keywords1 = ['self', 'None', 'True', 'False'];
    const keywords2 = ['and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'map', 'not', 'or', 'pass', 'raise', 'return', 'try', 'with', 'while', 'yield'];
	
    // escape regex special chars in keyword (defensive)
	function escapeRegExp(string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	// wrap each keyword with a span that has a CSS class for coloring
	for (const kw1 of keywords1) {
		const re = new RegExp('\\b' + escapeRegExp(kw1) + '\\b', 'g');
		highlightContent = highlightContent.replace(re, `<span class="kw1">${kw1}</span>`);
	}

    highlight.innerHTML = highlightContent;
}
