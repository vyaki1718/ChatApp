console.log(12 == "12") // true

console.log(false == "0") // true
/**
*  x -> boolean -> ToNumber -> false -> 0
   x = 0, y= "0", x == y
   y -> ToNumber -> 0
   0 == 0
 */

console.log(null == false) // false
/**
 * y is a boolean -> ToNumber -> 0
 * null == 0
 */

console.log(NaN == NaN)

let obj = {x:7, valueOf(){return 100}};
console.log(99 == obj); // 99 == 100 -> false

console.log(100 == obj) // 100 == 100 -> true