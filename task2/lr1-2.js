// определение функции
function add(a, b) {
    var result = a + b;
    console.log(result);
}
// вызов функции
add(20, 30); // 50
add(10, 15); //25
function add1(a, b) {
    return a + b;
}
var result = add1(1, 2);
console.log(result);
function getName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Иванов"; }
    return firstName + " " + lastName;
}
var name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
var name2 = getName("Вася");
console.log(name2); // Вася Иванов
