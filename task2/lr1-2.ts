// определение функции
function add(a: number, b: number){
    let result = a + b;
    console.log(result);
}
// вызов функции
add(20, 30); // 50
add(10, 15); //25

function add1(a: number, b: number): number {
    return a + b;
}
let result = add1(1, 2);
console.log(result);

function getName(firstName: string, lastName: string="Иванов") {
     
    return firstName + " " + lastName;
}
 
let name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
let name2 = getName("Вася");
console.log(name2); // Вася Иванов