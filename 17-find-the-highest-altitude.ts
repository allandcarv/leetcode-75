function largestAltitude(gain: number[]): number {
  let highest = 0;
  let prevAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    const currAltitude = prevAltitude + gain[i];
    prevAltitude = currAltitude;

    highest = Math.max(highest, currAltitude);
  }

  return highest;
}

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
