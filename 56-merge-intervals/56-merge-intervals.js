/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	intervals.sort((a,b) => a[0] - b[0]);
    let newArrStack = [intervals[0]]; 


	for (let i=1; i<intervals.length; i++) {
		const currIt = intervals[i];
		const stackTop = newArrStack[newArrStack.length -1];
		if ( currIt[0] <= stackTop[1] ) {
			const tempRange = [stackTop[0], currIt[1]];
			stackTop[1] = Math.max(currIt[1], stackTop[1]); 
} else newArrStack.push(currIt)
}
return newArrStack;

};