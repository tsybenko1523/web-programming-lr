let person: { name: string; age?: number } = { name: "Tom", age: 23 };
 
console.log(person.age);    // 23
person = { name: "Bob"};
console.log(person.age);    // undefined


let person1: { name: string; age?: number } = { name: "Tom", age: 36};
if (person.age !== undefined) {
     
    console.log(person.age);
}


function printUser(user: { name: string; age: number}) {
    console.log(`name: ${user.name}  age: ${user.age}`);
  }
  let tom = {age: 36, name: "Tom"};
   
  printUser(tom);


  function printUser1(user: { name: string; age: number}) {
    console.log(`name: ${user.name}  age: ${user.age}`);
  }
  let bob = {name: "Bob", age: 44, isMarried: true};
  printUser(bob);  


  function defaultUser(): { name: string; age: number} {
   
    return {name: "Tom", age: 37};
  }
   
  let user = defaultUser();
  console.log(`name: ${user.name}  age: ${user.age}`);


  let tom1: { name: string; age?: number } = { name: "Tom", age: 23 };
  let bob1: { name: string; age?: number } = { name: "Bob"};
   
   
  function printUser2(user: { name: string; age?: number }){
   
      if("age" in user){
          console.log(`Name: ${user.name} Age: ${user.age}`);
      }
      else{
          console.log(`Name: ${user.name}`);
      }
  }
  printUser(tom);
  printUser(bob);
  
  
  function printUser4({name, age}: { name: string; age: number}) {
    console.log(`name: ${name}  age: ${age}`);
  }
   
  let tom2 = {name: "Tom", age: 36};
  printUser(tom);


function printUser5({name, age}: { name: string; age?: number}) {
if(age!==undefined){ console.log(`name: ${name}  age: ${age}`);}
else {console.log(`name: ${name}`);}
}
let tom3 = {name: "Tom"};
printUser(tom);     // name: Tom

let bob3 = {name: "Bob", age: 44};
printUser(bob);     // name: Bob  age: 44  


function printUser6({name, age = 25}: { name: string; age?: number}) {
    console.log(`name: ${name}  age: ${age}`);
  }
   
  let tom4 = {name: "Tom"};
  printUser(tom);     // name: Tom  age: 25
   
  let bob4 = {name: "Bob", age: 44};
  printUser(bob);     // name: Bob  age: 44


  