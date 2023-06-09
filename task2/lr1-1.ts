let decimal: number = 6;
// шестнадцатиричная система
let hex: number = 0xf00d;       // 61453 в десятичной
// двоичная система
let binary: number = 0b1010;    // 10 в десятичной
// восьмиричная система
let octal: number = 0o744;      // 484 в десятичной
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

let firstName: string = "Tom";
let age: number = 28;
let info: string = `Имя ${firstName}    Возраст: ${age}`;
console.log(info);  // Имя Tom    Возраст: 28

let sum: any;
sum = 1200;
 
if (typeof sum === "number") {
    let result: number = sum / 12;
    console.log(result);
}
else{
    console.log("invalid operation");
}
