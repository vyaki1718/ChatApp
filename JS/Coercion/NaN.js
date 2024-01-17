console.log(Number("0xa"))
console.log(Number("ascd"))

let x = NaN;

console.log(x == NaN);
console.log(isNaN(x));

console.log(isNaN("vivek")) // isNaN convert incoming input to a number

console.log(Number.isNaN("vivek"))  //   coercion does not happen
console.log(Number.isNaN(x));

if(typeof(x) == 'number' && x !== x){
    console.log('Its NaN')
}