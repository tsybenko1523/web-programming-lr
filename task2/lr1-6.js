var a = undefined;
var b = null;
var x = undefined;
console.log(x);
x = null;
console.log(x);
x = 5;
console.log(x);
var userId = null;
function printId(id) {
    if (id === null) {
        console.log("пользователь отсутствует");
    }
    else {
        console.log("id \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: ".concat(id));
    }
}
printId(userId); // пользователь отсутствует
userId = 45;
printId(userId); // id пользователя: 45
var header1 = document.getElementById("header");
header1.innerText = "Hello Typescript!";
var header2 = null;
header2.innerText = "Hello Typescript!";
