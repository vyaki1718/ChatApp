

function parent(){  // parent -> global scope
     var x= 10;  // x -> parent scope
     function child(){ // child -> parent scope
        var y = 20;  // y -> child scope
        console.log(x);
        console.log(y);
     }
     child()
     console.log(x);
    //  console.log(y); // error
}

parent();