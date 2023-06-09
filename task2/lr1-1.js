var decimal = 6;
// шестнадцатиричная система
var hex = 0xf00d; // 61453 в десятичной
// двоичная система
var binary = 10; // 10 в десятичной
// восьмиричная система
var octal = 484; // 484 в десятичной
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
var firstName = "Tom";
var age = 28;
var info = "\u0418\u043C\u044F ".concat(firstName, "    \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(age);
console.log(info); // Имя Tom    Возраст: 28
var sum;
sum = 1200;
if (typeof sum === "number") {
    var result = sum / 12;
    console.log(result);
}
else {
    console.log("invalid operation");
}
