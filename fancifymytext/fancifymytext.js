function helloWorld() {
    alert("Hello, world!");
}

function makeTextBigger() {
    const textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

function applyFancyStyle() {
    const textArea = document.getElementById("textArea");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooifyText() {
    const textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");
    text = sentences
        .map(sentence => sentence.trim().length > 0 ? sentence + "-Moo" : "")
        .join(". ");
    textArea.value = text;
}

// Event Listeners
document.getElementById("biggerButton").onclick = () => {
    helloWorld();
    makeTextBigger();
};
document.getElementById("fancyShmancy").onchange = applyFancyStyle;
document.getElementById("boringBetty").onchange = applyFancyStyle;
document.getElementById("mooButton").onclick = mooifyText;
document.getElementById("fancyShmancy").onchange = helloWorld;
document.getElementById("boringBetty").onchange = helloWorld;
