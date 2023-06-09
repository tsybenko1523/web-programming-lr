let a: undefined = undefined;
let b: null = null;


let x: number = undefined;
console.log(x);
x = null;
console.log(x);
x = 5;
console.log(x);


let userId: number|null = null;
 
function printId(id: number|null){
    if (id === null) {
        console.log("пользователь отсутствует");
    } else {
        console.log(`id пользователя: ${id}`);
    }
}
printId(userId)     // пользователь отсутствует
userId = 45;
printId(userId);    // id пользователя: 45


const header1: HTMLElement|null = document.getElementById("header");
header1.innerText = "Hello Typescript!";


const header2: HTMLElement|null = null;
header2!.innerText = "Hello Typescript!";