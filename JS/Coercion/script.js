console.log('coercion')


console.log(2 - "3") // 1
console.log(2 + 2) // 4
console.log(10 - undefined) // NaN
console.log(10 - true) // 9
console.log(10 - false) // 10
console.log(8 - null)  // 8
console.log(9 - "asfads") // -> 9 - NaN -> NaN

console.log(8 - '0xa')  // -> 8 - 10 (hexadecimal number) -> -2
console.log(8 - "");