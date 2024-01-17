

// Array at method

const arr= [1, 2, 3, 4, 5];

Array.prototype.customAt= function (index){
    if(index >= this.length || index < 0) return ;
    return this[index]
}


// console.log(arr.customAt(2));


// Array map function

Array.prototype.customMap= function (cb){
    let len= this.length;
    let result =[];
    for(let i=0; i<len; i++){
        result[i]= cb(this[i], i);
    }
    return result;
}

// console.log(arr.customMap(item =>  item *2))


// Array Flatten method

const arr1 = [0, 1, 2, [3, 4, [5,6]]];
// console.log(arr1[3])

// Array.prototype.customFlat= function (){
//    let len = this.length;
//    let result=[];
   
//     for (let i =0; i <len; i++){
//         if(Array.isArray(this[i])){
//            let newArr= this[i];
//            for(let i = 0; i< newArr.length; i++){
//                result.push(newArr[i]);
//            }
//            }else {
//                result.push(this[i])
//         }
//       }

//    return result;
// }


// console.log(arr1.customFlat())

Array.prototype.myFlat = function(depth=1){
    const output = []
    function flattenArray(arr, depth){
        for (let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i]) && depth >0){
                flattenArray(arr[i], depth-1);
            }else{
                output.push(arr[i]);
            }
        }
        return output;
    }
   const returnValue = flattenArray(this, depth);
   return returnValue;
}
const inputArray = [0, 1, 2, [3, 4, [5,6]], 8];
console.log(inputArray.myFlat(  ));


//Filter Polyfill


function oddOrEven(x){
    return (x % 2 == 0);
}
Array.prototype.customFilter = function (fn){
    let length = this.length;
    let newArr=[];
    
    for(let i=0; i<length; i++){
      if(fn(this[i])){
          newArr.push(this[i]);
      }
    }
    return newArr;
}

const arrfiler=[1,2,3,4,5,6,7,8,9];

const result= arrfiler.filter(oddOrEven);
console.log(result)