let list: number[] = [10, 20, 30];
let colors: string[] = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);


let names: Array<string> = ["Tom", "Bob", "Alice"];
console.log(names[1]);  // Bob


const people = ["Tom", "Bob", "Sam"];
people[1] = "Kate";
console.log(people[1]); // Kate


function printUsers(users: readonly string[]) {
    for(const user of users){
        console.log(user);
    }
}
 
function usersToString(users: ReadonlyArray<string>): String{
     
    return users.join(", ");
}
 
const people1: readonly string[]= ["Tom", "Bob", "Sam"];
 
printUsers(people);
console.log(usersToString(people));


const people2: string[]= ["Tom", "Bob", "Sam"];
 
const [first, ...rest] = people;
console.log(first);     // Tom
console.log(rest[0]);   // Bob
console.log(rest[1]);       // Sam


const people3: string[]= ["Tom", "Bob", "Sam", "Kate"];
 
const [, second, , forth] = people; // пропускаем первый и третий элементы массива
console.log(second);        // Bob
console.log(forth);         // Kate