// What is this about?
// - Define what an algorithm is
// - Devise a plan to solve algorithms
// - Compare and contrast problem solving patterns including frequency counters,
//   two pointer problems and divide and conquer 

function charCount(word){
    // make an object to return at the end
    var result = {};
    // loop over string, for each character
    for(var i = 0; i < word.length; i++){
        var char = word[i].toLowerCase();
        // if the char is a number/letter and is a key in object, add one to count
        if(/[a-z0-9]/.test(char)){
            if(result[char] > 0){ // object[key] > x: x is compared to the value in object[key] 
                result[char]++;
            } 
    // if the char is a number/letter and not in object, add it to object and set value tp 1 

            else {
                result[char] = 1;
            }
        }
    }

    // if character is something else (space, period, etc) dont do anything 
    // return object 
    return result;
}


function charCount(word){
    var result = {};
    for (var char of word){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(result[char] > 0){ // object[key] > x: x is compared to the value in object[key] 
                result[char]++;
            } 
    // if the char is a number/letter and not in object, add it to object and set value tp 1 
            else {
                result[char] = 1;
                }
        }
    }
    return result;
}

// function charCount(str){
//     var obj = {};
//     for(var char of str){
//         char = char.toLowerCase();
//         if(/[a-z0-9]/.test(char)){
//             result[char] = ++result[char] || 1;
//         }
//     }
//     return obj;
// }

// Interesting note! Regular expression is not always the fastest way to solve problems
// function isAlphaNumeric(char){
//     var code = char.charCodeAt(0);
//     if(!(code > 47 && code < 58) &&
//        !(code > 64 && code < 91) &&
//        !(code > 96 && code < 123)){
//            return false;
//        }
//        return true;
// }

// function charCount(str){
//     var obj = {};
//     for(var char of str){
//         char = char.toLowerCase();
//         if(isAlphaNumeric(char)){
//             result[char] = ++result[char] || 1;
//         }
//     }
//     return obj;
// }









// Frequency Counters 
// This pattern uses objects or sets to collect values/frequencies of values

// This can often avoid the need for nested loops over O(N^2) operations with arrays / strings 

// Ex) Write a function called same, which accepts two arrays. The function should return if every value in the array
// has it's corresponding value squared in the second array. The frequency of values must be the same 

// Samples: same([1,2,3], [4,1,9]) - true, same([1,2,3], [1,9]) - false, same([1,2,1], [4,4,1]) - false

// MySolution
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    // const len = arr1.length;

    for(let i=0; i < arr1.length; i++){
        if ((arr1.indexOf(Math.sqrt(arr2[i])) !== -1)){
            arr1.splice(arr1.indexOf(Math.sqrt(arr2[i])),1); 
        }
    }

    return arr1.length === 0 ? true :  false;

}
same([1,2,3], [4,1,9]);
same([1,2,3], [1,9]);
same([1,2,1], [4,4,1]);


// Alternative Solutions
// #1 Time Complexity: O(n^2)

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr[i] **2)
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

// #2 Time Complexity: O(n)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key **2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true
}
// using 2 for loops is significantly better than using nested for loops 



function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    }
    return true
}

// solution

function validAnagram(first, second){
    if(first.length !== second.length){
        return false;
    }
    
    const lookup = {};

    for (let i = 0; i < first.length; i++){
        let letter = first[i];

        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        if(!lookup[letter]){
            return false;
        } else { 
            lookup[letter] -= 1;
        }
    }
    return true;
}



//My Solution
function countUniqueValue(list){
    let int = list[0]; 
    let count = 0;
    for (let i = 0; i < list.length - 1; i++) {
        if(int === list[i+1]){

        } else {
            int = list[i+1]
            count ++; 
        }
    }

    if(list[list.length - 2] !== list[list.length - 1]){
        count++;
    }

    return count;
}


//Solution
function countUniqueValue(arr){
    if (arr.length === 0) {
        return 0;
    }
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i ++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}