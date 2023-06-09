function sum(x, y) {
    return x + y;
}
;
function subtract(a, b) {
    return a - b;
}
;
var op;
op = sum;
console.log(op(2, 4)); // 6
op = subtract;
console.log(op(6, 4)); // 2
function sum1(x, y) {
    return x + y;
}
;
function multiply(a, b) {
    return a * b;
}
;
function mathOp(x, y, op) {
    return op(x, y);
}
console.log(mathOp(10, 20, sum)); // 30 
console.log(mathOp(10, 20, multiply)); // 200 
function mathOp1(x, y, op) {
    return op(x, y);
}
var sum2 = function (x, y) {
    return x + y;
};
console.log(mathOp(10, 20, sum)); // 30
function mathOp2(x, y, operation) {
    var result = operation(x, y);
    return result;
}
console.log(mathOp(10, 20, function (x, y) { return x + y; })); // 30 
console.log(mathOp(10, 20, function (x, y) { return x * y; })); // 200 
