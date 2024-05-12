function showAlert() { 
    alert("Hello, world!");
}
//bigger button ---
document.getElementById("button-Bigger").onclick = function(){
    document.getElementById("insertText").style.fontSize = "24pt";
};
//bigger button ---

//radios ---
document.getElementById("radioButton-fancy").onchange = function() {
    if (document.getElementById("radioButton-fancy").checked) {
        document.getElementById("insertText").style.color = "blue";
        document.getElementById("insertText").style.fontWeight = "bold";
        document.getElementById("insertText").style.textDecoration = "underline";
    }
};
document.getElementById("radioButton-boring").onchange = function() {
    if (document.getElementById("radioButton-boring").checked) {
        document.getElementById("insertText").style.color = "black";
        document.getElementById("insertText").style.fontWeight = "normal";
        document.getElementById("insertText").style.textDecoration = "none";
    }
};
//radios ---

//moo ---
document.getElementById("button-Moo").onclick = function() {
    var input = document.getElementById("insertText").value;
    var sentences = input.split(".");
    var newMoo = sentences.map(function(sentence) {
        var words = sentence.split(" ");
        var lastWord = words.pop();
        if (lastWord.endsWith(" ")) {
            lastWord = lastWord.slice(0, -1);
        }
        lastWord = lastWord.toUpperCase();
        words.push(lastWord + " Moo");
        return words.join(" ");
    });
    document.getElementById("insertText").value = newMoo.join(".");
};