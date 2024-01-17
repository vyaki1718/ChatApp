

function fun(fn){
    console.log("how much fun??");
    fn();
}

// fun(function(){  // decreases redability of code
//     console.log("wow so much fun");
// })

fun(function askingForFun(){ // increase code redability
    console.log("wow so much fun");
    console.trace() // named function to capture trace of function
})

function factorial(n){
    return n <= 1 ? 1 : n * factorial(n-1);
}

let fact=[1,2,3,4,5].map(factorial);
console.log(fact)

// let fact1=[1,2,3,4,5].map(function (n)=>{
//     return n <= 1 : /*what goes hehe  */ (n - 1)*n;  // cant call recursion with anonymous function
// });