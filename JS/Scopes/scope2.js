var teacher = 'vivek';

function fun(){
    var teacher = "pulkit"
    content= "JS"; // auto global
    console.log(teacher)
}

function gun(){
    var student = "Sarthak";
    console.log(student);
}

// console.log(content) // auto global works time of assignment
fun();
gun();
console.log(teacher)
console.log(content)