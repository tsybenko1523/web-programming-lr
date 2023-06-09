var list = [10, 20, 30];
var colors = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);
var names = ["Tom", "Bob", "Alice"];
console.log(names[1]); // Bob
var people = ["Tom", "Bob", "Sam"];
people[1] = "Kate";
console.log(people[1]); // Kate
function printUsers(users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log(user);
    }
}
function usersToString(users) {
    return users.join(", ");
}
var people1 = ["Tom", "Bob", "Sam"];
printUsers(people);
console.log(usersToString(people));
var people2 = ["Tom", "Bob", "Sam"];
var first = people[0], rest = people.slice(1);
console.log(first); // Tom
console.log(rest[0]); // Bob
console.log(rest[1]); // Sam
var people3 = ["Tom", "Bob", "Sam", "Kate"];
var second = people[1], forth = people[3]; // пропускаем первый и третий элементы массива
console.log(second); // Bob
console.log(forth); // Kate
