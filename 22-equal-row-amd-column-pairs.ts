function equalPairs(grid: number[][]): number {
  const columnsMap = new Map<string, number>();
  let pairs = 0;

  for (let col = 0; col < grid.length; col++) {
    const column: number[] = [];
    for (let row = 0; row < grid.length; row++) {
      column.push(grid[row][col]);
    }

    const newColumn = column.join(',');

    columnsMap.set(newColumn, (columnsMap.get(newColumn) ?? 0) + 1);
  }

  for (const row of grid) {
    const occurrences = columnsMap.get(row.join(','));

    if (occurrences) {
      pairs += occurrences;
    }
  }

  return pairs;
}

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
);

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 4],
    [2, 4, 2, 2],
    [2, 5, 2, 2],
  ])
);
