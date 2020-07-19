function sameFrequency(int1, int2){
    if(int1.length !== int2.length){
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of int1.toString().split('')){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    };

    for(let val of int2.toString().split('')){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let property in frequencyCounter1){
        if (frequencyCounter1[property] !== frequencyCounter2[property]){
            return false
        }
    }

    return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));



function areThereDuplicates(...args) {
    
    args.sort();
    args.sort((a,b)=>a-b);
    
    var i = 0;

    for(let j = 1; j < args.length; j++){
        if(args[i] !== args[j]){
            i++;
            args[i] = args[j]
        } else {
            return true
        }
    }
    return false 
  }

  console.log(areThereDuplicates(1,2,3))
  console.log(areThereDuplicates(1,2,2))
  console.log(areThereDuplicates('a','b','c','a'))

  
function averagePair(arr, num){
    let beginning = 0;
    let ending = arr.length - 1;

    while(beginning < ending){
        let average = (arr[beginning] + arr[ending]) / 2; 

        if(average === num){
            return true;
        } else if (average < num){
            beginning ++;
        } else {
            ending --;
        }
    }
    return false; 
}

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([],4));


function isSubsequence(word, words){
    let i = 0;
    let j = 0; 

    while(j < words.length){
        if(word[i] === words[j]) {i ++};
        if(i === word.length){return true};
        j++;
    }
    return false; 
}


console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));