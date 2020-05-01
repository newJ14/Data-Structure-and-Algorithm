// Big O Notation 
// this is about checking the best among the solutions 

// Write a fucntion that adds numbers from 1 to n
function addUpTo(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

let t1 = performance.now();
addUpTo(100000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1)/1000} seconds`);
// This generates a different result everytime it runs 

// Problems with the approach above 
// - Different machines will record different times 
// - Same machine will record different times 
// - For fast algorthms, speed measurement may not be precise enough 


// This function also adds numbers from 1 to n 
function addUpTo(n){
    return n*(n+1)/2;
}


// Counting operations 
function addUpTo(n){
    let total = 0; // 1 assignment 
    for(let i = 1; i <= n; i++){ //1 assignment (let i = 1), n comparisons (i <= n), n additions and n assignment (i++)
        total += i; // n additions, n assignments 
    }
    return total;
}

// Counting is challenging 
// Depending on what we count, the number of operations may differ 
// However, the number of operations grows proportionally with n regardless of the exact number

// How would input change the run time of codes 
// f(n) = n       Linear 
// f(n) = n^2     quadratic
// f(n) = 1       constant
// f(n) = log(n)  logarithm 
// f(n) = nlog(n) 

// Run time comparison (Fastest to slowest)
// constant > log(n) > linear > nlog(n) > quadratic


// Rule of thumbs for big O
// O(2n) -> O(n)
// O(1) -> O(500)
// O(3n^2) -> O(n^2)
// O(10000n+50) -> O(n)
// O(n^2 + 5n + 3) -> O(n^2)

// 1. Arithmetic operations are constant 
// 2. Variable assignment is constant 
// 3. Accessing elements in an array (by index) or object (by key) is constant 
// 4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop 


// Space Complexity 
// How much additional memory do we need to allocate in order to run the code in our algorthm?

// Rule of thumbs 
// Most primitives (booleans, numbers, undefined, null) are constant space 
// Strings require O(n) space (Where n is the string length)
// Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

function sum(arr){
    let total = 0; //One number 
    for (let i = 0; i < arr.length; i++){ //another number 
        total += arr[i];
    }
    return total;
}
// O(1) space since there is only one assignment (Taking up only one spot of memory)


function double (arr){
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        newArray.push(2*arr[i]);
    }
    return newArr; //n numbers 
}
// O(n) space 
// Pushing values into the array n times (Taking up n spots of memory)


// Objects 
// Unordered, key value pairs 

let instructor = {
    firstName = "Kelly", 
    isInstructor = true, 
    favouriteNumbers: [1,2,3,4]
}

// When to use objects?
// - When you don't need orders
// - When you need fast access/insertion/removal 

// Insertion: O(1)
// Removal: O(1)
// Searching: O(N) May differe depending on searching algorithms
// Access: O(1)
// Object.keys: O(N)
// Object.values: O(N)
// Object.entities: O(N)
// hasOwnProperty: O(1) -> Object[1] is O(1)

// Arrays 
// - WHen you need an order

// Big O of arrays

// Insertion - It depends (Whether you input at the beginng or end of an array) Inserting at the end is faster
// Removal - It depends (Whether you delete at the beginng or end of an array) removing at the end is faster
// Searching - O(N) May differe depending on searching algorithms
// Access - O(1)

// Big O of Array Operations 
// Push - O(1)
// Pop - O(1)
// Shirt - O(N)
// Unshirt - O(N)
// concat - O(N)
// slice - O(N)
// splice - O(N)
// sort - O(Nlog(N))
// forEach/map/filter/refuce/etc., - O(N)