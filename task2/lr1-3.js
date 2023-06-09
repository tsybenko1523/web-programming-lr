function add(a, b) {
    var result = a + b;
    console.log(result);
}
// вызов функции
add(20, 30); // 50
add(10, 15); //25
var koef = 1.5;
function add1(a) {
    var result = a * koef;
    console.log(result);
}
add1(20); // 30
add1(10); //15
function getName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
var name2 = getName("Вася");
console.log(name2); // Вася
function defaultLastName() {
    return "Smith";
}
function getName(firstName, lastName) {
    if (lastName === void 0) { lastName = defaultLastName(); }
    return firstName + " " + lastName;
}
var name1 = getName("Tom");
console.log(name1); // Tom Smith
