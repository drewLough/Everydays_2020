/**
 * @param {number[][]} points
 * @return {number}
 */

var distanceBetweenPoints = function(pointA, pointB) {
    let distance = 0;
    let dx = Math.abs(pointB[0]-pointA[0]);
    let dy = Math.abs(pointB[1]-pointA[1])
    return Math.max(dx,dy);
}


var minTimeToVisitAllPoints = function(points) {
    let steps = 0;
    for (let i = 0; i < points.length - 1; i++) {
        steps += distanceBetweenPoints(points[i+1],points[i]);
    };
    return steps;
};

var input = [[1,1],[3,4],[-1,0]];
console.log(minTimeToVisitAllPoints(input));