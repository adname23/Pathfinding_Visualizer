export function bfs(area, start, finish) {
    const nodes = [];
    let stack = [start];
    while (stack.length) {
      const curr = stack.shift();
      if (curr === finish) return nodes;
  
      if ((curr.isStart || !curr.isVisited) && !curr.isWall) {
        nodes.push(curr);
        const {column, row} = curr;
        let next;
        curr.isVisited = true;
        if (row > 0) {
          next = area[row - 1][column];
          if (next.isVisited === False) { //repeat for all positions
            next.previousNode = curr;
            stack.push(next);
          }
        }
        if (column < area[0].length - 1) {
          next = area[row][column + 1];
          if (next.isVisited === False) {
            next.previousNode = curr;
            stack.push(next);
          }
        }
        if (row < area.length - 1) {
          next = area[row + 1][column];
          if (next.isVisited === False) {
            next.previousNode = curr;
            stack.push(next);
          }
        }
        if (column > 0) {
          next = area[row][column - 1];
          if (next.isVisited === False) {
            next.previousNode = curr;
            stack.push(next);
          }
        }
        
      }
    }
  }
