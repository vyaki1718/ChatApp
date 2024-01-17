// Higher order function -> there are function which takes anather function as arguments
//these are called higher order function

function f(x, fn){
    
    console.log(x);
    fn();
}


f(10, function exce(){
    console.log("I am an expression passed to HOF")
})