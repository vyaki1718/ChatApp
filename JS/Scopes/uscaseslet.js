

function fun(){
     for(var i=0; i<10; i++){

     }

     console.log(i);
}

fun();
function process(x,y){
     if(x > y){
        var temp = x;
        x = y;
        y=temp
     }
     console.log(temp)
}