function sum (x: number, y: number): number {
    return x + y;
};
function subtract (a: number, b: number): number {
    return a - b;
};
 
let op: (x:number, y:number) => number;
 
op = sum;
console.log(op(2, 4));  // 6
 
op = subtract;
console.log(op(6, 4));  // 2


function sum1 (x: number, y: number): number {
    return x + y;
};
function multiply (a: number, b: number): number {
    return a * b;
};
  
function mathOp(x: number, y: number, op: (a: number, b: number) => number): number{
  
    return op(x, y);
}
console.log(mathOp(10, 20, sum)); // 30 
console.log(mathOp(10, 20, multiply)); // 200 



type Operation = (a: number, b: number) => number;
 
function mathOp1(x: number, y: number, op: Operation): number{
  
    return op(x, y);
}
let sum2: Operation = function(x: number, y: number): number {
    return x + y;
};
 
console.log(mathOp(10, 20, sum)); // 30


function mathOp2(x: number, y: number, operation: (a: number, b: number) => number): number{
 
    let result = operation(x, y);
    return result;
}
console.log(mathOp(10, 20, (x,y)=>x+y)); // 30 
console.log(mathOp(10, 20, (x, y) => x * y)); // 200 

