/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
//     let tres = 0;
    
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             tres = 0;
//         } else {
//             tres ++;
//         }
        
//         if (tres === 3) return true;
//     }
    
//     return false;
    
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] & 1 && arr[i - 1] & 1 && arr[i - 2] & 1) {
            return true;
        }
    }

    return false;
};