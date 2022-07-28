/**
 * @param {number[]} arr
 * @return {boolean}
 */

const sum = array => {
    return array.reduce((first, next) => first + next);
}

var canThreePartsEqualSum = function(arr) {
    let target = arr.reduce((start,next) => start+next);
    if (target % 3 !== 0) return false;
    target = target/3;
    
    let currentSum = 0; 
    let count = 0; 
    
    for(const num of arr) {
        currentSum += num;
        
        if (currentSum === target) {
            count++; 
            currentSum = 0; 
        }
    }
    
    
    
    
    
    
    
    return count >= 3;
    
//     let secondStart = 1; 
//     let thirdStart = 2; 
    
//     while(secondStart < arr.length-1) {
//         while(thirdStart < arr.length) {
//             const arr1 = arr.slice(0, secondStart);
//             const arr2 = arr.slice(secondStart, thirdStart);
//             const arr3 = arr.slice(thirdStart);
            
//             if (sum(arr1) === sum(arr2) && sum(arr2) === sum(arr3)) return true
            
//             thirdStart++;
//         }
//         secondStart++;
//         thirdStart = secondStart + 1;
//     }
    
//     return false
};

