{
    var a= 3; // accessible outside of block
}

console.log(a);


function fun(){
    console.log(y) // y is accessible here
    var y= 5;  // not accessible outside of function
}
fun()
// console.log(y) // throw error

function gun(){
    console.log(z); // not accessible here
    let z = 10 // not accessible above declaration
}