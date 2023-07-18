function checkStraightLine(coordinates) {
  const n = coordinates.length;

  if (n <= 2) {
    return true;
  }

  let [x0, y0] = coordinates[0];
  let [x1, y1] = coordinates[1];

  for (let i = 2; i < n; i++) {
    let [x, y] = coordinates[i];

    if ((x1 - x0) * (y - y0) !== (x - x0) * (y1 - y0)) {
      return false;
    }
  }

  return true;
}

let coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]