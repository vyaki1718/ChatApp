
/**
 * reduce is higher order function available for arrays
 * reduce also take function f as argument
 * what reduce does is, it one by one goes to every element of the array 
 * say the current element is arr[i]
 * reduce will pass this element to function f, and accumulate the result of further function calls 
 * with this perticular result
 */

const arr=[1,2,3,4,5,6];

function sum(presResult, currValue){
    console.log(presResult, currValue)
    return presResult + currValue;
}

const result = arr.reduce(sum);
console.log(result)


//usecase for reduce . shopping cart total price

const products = [{name:"iphone", price:10000}, {name:"back cover", price:500}, {name:"tempered glass", price:100}];

function totalPrice (pre, curr){
        console.log(pre,curr)
       let totalPrice = pre.price + curr.price;
       return {price:totalPrice};
}

const price = products.reduce(totalPrice);
console.log("price", price)