//lexical scoping
var teacher = "sanket";  //teacher -> global -> sanket

function ask(question){  // ask -> global, question -> ask
    console.log(teacher, question) // sanket why!
}

function fun(){
    var teacher = "pulkit"; // teacher -> fun -> pulkit 
    ask("why!")
}
fun();