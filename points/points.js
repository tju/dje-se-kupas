
function inRange(x, min, max) {
  return (min <= x && x <= max);
}

function calculatePoints(minL, maxL, minPoints, maxPoints, l){
  if(l < minL){
    return maxPoints;
  }

  if(l > maxL){
    return minPoints;
  }

  return minPoints + ((maxPoints - minPoints) / (maxL - minL) ) * (maxL - l);
};


module.exports.calculatePoints = calculatePoints;

module.exports.getPoints = function (distance) {
  var points;

  if (inRange(distance, 0, 10)) {        // Real basic point thresholds depending on kilometer distances
    points = 10000;
  } else if (inRange(distance, 10, 50)) {
    points =  calculatePoints(10, 50, 9000, 10000, distance);
  } else if (inRange(distance, 50, 200)) {
    points =  calculatePoints(50, 200, 7000, 9000, distance);
  } else if (inRange(distance, 200, 500)) {
    points =  calculatePoints(200, 500, 5000, 7000, distance);
  } else if (inRange(distance, 500, 1000)) {
    points =  calculatePoints(500, 1000, 1000, 5000, distance);
  } else if (inRange(distance, 1000, 2000)) {
    points =  calculatePoints(1000, 2000, 500, 1000, distance);
  } else if (inRange(distance, 2000, 3000)) {
    points =  calculatePoints(2000, 3000, 10, 500, distance);
  } else {
    points = 0;
  }

  return Math.floor(points);
}



