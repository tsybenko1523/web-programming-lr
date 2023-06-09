function add(a: number, b: number){
    let result = a + b;
    console.log(result);
}
// вызов функции
add(20, 30); // 50
add(10, 15); //25

let koef: number = 1.5;
 
function add1(a: number){
    let result = a *koef;
    console.log(result);
}
 
add1(20); // 30
add1(10); //15


function getName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
  
let name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
let name2 = getName("Вася");
console.log(name2); // Вася


function defaultLastName(): string{
    return "Smith";
}
 
function getName(firstName: string, lastName: string=defaultLastName()) {
     
    return firstName + " " + lastName;
}
 
let name1 = getName("Tom");
console.log(name1); // Tom Smith