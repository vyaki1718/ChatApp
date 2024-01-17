function x(){
    console.log("normal fun x")
}


(function x(){  // to avoid naming collision iife can be used
    console.log("iife x");
})();

x()


function f(){
    return 1;
}

function g(){
    return 2;
}

// if(x%2){
//     var res =f();
// }else{
//     var res= g();
// }

var i=10;
var res= (function fun(i){
        if(i%2==0){
           return f();
        }else{
          return g();
        }
})(i)

console.log(res)