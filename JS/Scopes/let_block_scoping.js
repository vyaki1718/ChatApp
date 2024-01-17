var teacher = "Vivek"; // global

function fun(){ // global
    console.log(teacher); //  no error will be given
    // console.log(content); //throws an error
    var teacher= "Mayur";  // scope of fun
    let content = "JS"; // content will be access only post declaration
    if(content == "JS"){
        let hours = "120+";  // block scope
        console.log(content,hours)
    }
    console.log(teacher,content)

}
fun();
console.log(teacher)


//redeclaration is not allowed for let and var allow redeclaration
// let x=9;
// let x=10;