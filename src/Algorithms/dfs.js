export function dfs(area, beg, end) {
    const nodes = [];
    const stack = [];
    stack.push(beg);
    while (stack.length) {
      var curr = stack.pop();
      if (curr === end) {return nodes;}
      if ((curr.isStart || !curr.isVisited) && !curr.isWall ) {
        nodes.push(curr);
        curr.isVisited = true;
        const {column, row} = curr;
        let next;
        if (column > 0) {
          next = area[row][column - 1]; 
          if (next.isVisited === False) {//same for all positions
            next.previousNode = curr;
            stack.push(next);
          }
        }
        if (row > 0) {
          next = area[row - 1][column];
          if (next.isVisited === False) {
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
      }
    }
  }
