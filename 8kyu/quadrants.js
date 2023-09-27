//Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

//My solution below; 

function quadrant(x, y) {
    if (x > 0 && y > 0) return 1
    if (x > 0 && y < 0) return 4
    if (x < 0 && y > 0) return 2
    if (x < 0 && y < 0) return 3
  }