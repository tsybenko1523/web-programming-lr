var id;
id = "1345dgg5";
console.log(id); // 1345dgg5
id = 234;
console.log(id); // 234
function printId(id) {
    console.log("Id: ".concat(id));
}
function printId1(id) {
    console.log("Id: ".concat(id));
}
var id1 = "ruy74";
printId("1h2e3l4o5");
printId(9876);
printId(id);
function printSentence(words) {
    // если words - строка
    if (typeof words === "string") {
        console.log(words);
    }
    else {
        // Если words - массив string[]
        console.log(words.join(" "));
    }
}
printSentence(["Язык", "программирования", "TypeScript"]);
printSentence("Язык программирования JavaScript");
