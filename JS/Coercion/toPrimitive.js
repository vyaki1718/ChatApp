let obj = {};

console.log(10 - obj) // 10 - obj -> obj.valueOf -> object, toString -> [object Object];

let obj1= {x:1, y:9}
console.log(10 - obj) 

let obj2= {x:7 , valueOf(){return 99}};
console.log(100 - obj2) // 100 - obj2 -> obj.valueOf -> 99

let obj3 = {x:7 , toString(){return "88"}};
console.log(90- obj3)

let obj4 = {x:6, toString(){return {}}};
console.log(10- obj4)