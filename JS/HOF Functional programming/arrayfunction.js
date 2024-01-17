/**
   array also custom object in JS
   index of the element is the key and the element itself is the value
   ["abc", "def", "ghi"] -> {"0":"abc", "1":"def", "2":"ghi"}
 */


/**
  map function
  map is higher order function available with arrays
  it takes function as an arguments -> f
  it returna an array in which every value is actually populated by calling
  function f with original array element an argument

  every element of the original array is passed one by one in the arguments function f
  whatever is the output for each individual, we populate that output in an array 

  map internally iterates/loops over every element of the given original array 
  pass that element in the arguments function f and then store return value inside an array
*/

function square(el){
    return el*el;
}

function cube(el){
    return el*el*el;
}

function isOddEven(el){
    if(el%2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}

const arr=[1,2,3,4,5];

const result = arr.map(square); // square is function passed as an arguments

/**
 * square(1) -> 1
 * square(2) -> 4
 * square(3) -> 9
 * square(4) -> 16
 * square(5) -> 25
 */
console.log(result)

const resultArray = arr.map(cube);
console.log(resultArray);

const oddEven= arr.map(isOddEven);
console.log(oddEven)

Array.prototype.map2 = function (exc){
    let lenth = this.length;
    let arr=[];
    for(let i=0; i<lenth; i++){
       let temp = exc(this[i], i);
       arr.push(temp);
    }

    return arr;
    
}

const cubeResult= arr.map2(cube);
console.log("cube", cubeResult)