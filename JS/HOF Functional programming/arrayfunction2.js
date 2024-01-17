/**
 * Filter is also higher order function
 * Fliter is also loop over array element
 * there is one special thing about filter, i.e. the argument function f which we have to pass inside
 * filter should always return a boolean, otherwise output will be converted to a boolean
 * 
 * filter loop ove revery element, passes that element in the argument function  and then if the output of the
 * function call is true, the it store the original element in a new array otherwise
 * doesn't add this add this add element to the array
 */

function oddOrEven(x){
    return (x % 2 == 0);
}

const arr=[1,2,3,4,5,6,7,8,9];

const result= arr.filter(oddOrEven);
console.log(result)
