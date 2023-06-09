var person = { name: "Tom", age: 23 };
console.log(person.age); // 23
person = { name: "Bob" };
console.log(person.age); // undefined
var person1 = { name: "Tom", age: 36 };
if (person.age !== undefined) {
    console.log(person.age);
}
function printUser(user) {
    console.log("name: ".concat(user.name, "  age: ").concat(user.age));
}
var tom = { age: 36, name: "Tom" };
printUser(tom);
function printUser1(user) {
    console.log("name: ".concat(user.name, "  age: ").concat(user.age));
}
var bob = { name: "Bob", age: 44, isMarried: true };
printUser(bob);
function defaultUser() {
    return { name: "Tom", age: 37 };
}
var user = defaultUser();
console.log("name: ".concat(user.name, "  age: ").concat(user.age));
var tom1 = { name: "Tom", age: 23 };
var bob1 = { name: "Bob" };
function printUser2(user) {
    if ("age" in user) {
        console.log("Name: ".concat(user.name, " Age: ").concat(user.age));
    }
    else {
        console.log("Name: ".concat(user.name));
    }
}
printUser(tom);
printUser(bob);
function printUser4(_a) {
    var name = _a.name, age = _a.age;
    console.log("name: ".concat(name, "  age: ").concat(age));
}
var tom2 = { name: "Tom", age: 36 };
printUser(tom);
function printUser5(_a) {
    var name = _a.name, age = _a.age;
    if (age !== undefined) {
        console.log("name: ".concat(name, "  age: ").concat(age));
    }
    else {
        console.log("name: ".concat(name));
    }
}
var tom3 = { name: "Tom" };
printUser(tom); // name: Tom
var bob3 = { name: "Bob", age: 44 };
printUser(bob); // name: Bob  age: 44  
function printUser6(_a) {
    var name = _a.name, _b = _a.age, age = _b === void 0 ? 25 : _b;
    console.log("name: ".concat(name, "  age: ").concat(age));
}
var tom4 = { name: "Tom" };
printUser(tom); // name: Tom  age: 25
var bob4 = { name: "Bob", age: 44 };
printUser(bob); // name: Bob  age: 44
