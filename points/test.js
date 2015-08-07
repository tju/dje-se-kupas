var test = require('tape');
var points = require('./points.js');

var getPoints = points.getPoints;
var calculatePoints = points.calculatePoints;

test('calculatePoints', function(t){

  t.equals(
    calculatePoints(500, 1000, 5000, 7000, 1000),
    5000
  );

  t.equals(
    calculatePoints(500, 1000, 5000, 7000, 500),
    7000
  );

  t.end();
});


test('expected points', function (t) {
  t.equals(getPoints(0),   10000);
  t.equals(getPoints(1),    10000);
  t.equals(getPoints(10),   10000);

  t.ok( getPoints(49)  >    9000, '>9000');
  t.equals(getPoints(50),   9000);

  t.ok( getPoints(199)  >    7000, '>7000');
  t.equals(getPoints(200),  7000);

  t.ok( getPoints(499)  >    5000, '>5000');
  t.equals(getPoints(500),  5000);

  t.ok( getPoints(999)  >    1000, '>1000');
  t.equals(getPoints(1000),  1000);
  t.equals(getPoints(2000),  500);
  t.equals(getPoints(3000),  10);

  t.end();
});

for (var i = 0; i<5000; i+=10){
  console.log('daljina:'+ i + ' ,poeni: '+ getPoints(i));
}
