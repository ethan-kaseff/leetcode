/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {

  // make return array 
  let returnArray = [];

  // iterate through queries 
  for (let query of queries) {

    // create boolean for testing
    let numOfPoints = 0;

    // iterate through points relative to x and y conditions
    for (let point of points) {

      // check hypotenus of triangle to see if smaller than radius
      const relativeX = point[0] - query[0];
      const relativeY = point[1] - query[1];

      if (Math.sqrt(relativeX ** 2 + relativeY ** 2) <= query[2]) {
        numOfPoints++;
      }
    }

    // add to return array if a match 
    returnArray.push(numOfPoints);
  }

  // return return array 
  return returnArray
};