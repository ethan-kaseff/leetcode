/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
//     const arrString = arr.toString();
//     const length = m; 
//     const repeats = k;
//     let options = {}; 
    
//     for (let i=0; i<arr.length-length; i++) {
//         const bit = arr.slice(i, i+length);
//         options[bit].count = 0; 
//         options[bit].start = i;
//     }
    
//     console.log('options', options)
//     for (key of Object.keys(options)) {
//         const ele = key;
//         const start = options[key].start;
//         let count = 1;
        
//         console.log('ele______________', ele);
//         console.log('start', start);
        
//         for (let i=start+length; i<arr.length-length; i=i+length) {
//             if (arr.slice(i, i+length).toString() === ele) count++;
            
//             console.log('slice', arr.slice(i, i+length).toString())
//             console.log('count', count)
//         }
        
        
//         if (count > repeats) return true;
//     }
    
    // return false;
    
    // Sought out another persons code, to help me understand the problem
    
    const delta = m * k   
  
    for (let i = 0; i + delta <= arr.length; i++) {
        const pattern = arr.slice(i, i + delta).join('')

        if (pattern.slice(0, m).repeat(k) === pattern) {
          return true
        }
    }
  
    return false
    
};