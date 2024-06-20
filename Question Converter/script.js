// script.js

function insertText(startTag, endTag = '', midTag = '') {
    const textarea = document.getElementById('question');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const text = textarea.value;
    textarea.value = text.substring(0, startPos) + startTag + midTag + endTag + text.substring(endPos);
    textarea.focus();
    textarea.selectionEnd = startPos + startTag.length + midTag.length;
    renderMath();
}

function renderMath() {
    const questionText = document.getElementById('question').value;
    const questionPreview = document.getElementById('question-preview');
    questionPreview.textContent = `$$${questionText}$$`;
    MathJax.typesetPromise();
}

function convertText() {
    const question = document.getElementById('question').value.trim();
    const answer = document.getElementById('answer').value.trim().split(',').map(ans => ans.trim());
    const explanation = document.getElementById('explanation').value.trim();

    const result = {
        question: `$$${question}$$`,
        answer: answer,
        explanation: explanation
    };

    document.getElementById('output').textContent = JSON.stringify(result, null, 4);
    renderMath();
}

document.getElementById('question').addEventListener('input', renderMath);
