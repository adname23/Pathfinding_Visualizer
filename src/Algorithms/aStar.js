export function AStar(area, start, end) {
    const nodes = [];
    start.distance = 0;
    const unreached = getNodes(area); 
  
    while (unreached.length) {
      sortDist(unreached);
      const closest = unreached.shift();
      if (closest.isWall === False) {
        if (closest.distance === Infinity) return nodes;
        nodes.push(closest);
        closest.isVisited = true;
        if (closest === end) return nodes;
        updateUnvisited(closest, area);
      }
    }
  }
  
  function getNodes(area) {
    const nodes = [];
    for (const row of area) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }
  
  function sortDist(unvisited) {
    unvisited.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  }
  
  function updateUnvisited(node, area) {
    const unvisited = getUnvisited(node, area);
    for (const node of unvisited) {
      node.distance = node.distance + 1 + node.distanceToFinishNode;
      node.previousNode = node;
    }
  }
  
  function getUnvisited(node, area) {
    const nodes = [];
    const {column, row} = node;
    if (column > 0) nodes.push(area[row][column - 1]);
    if (row > 0) nodes.push(area[row - 1][column]);
    if (column < area[0].length - 1) nodes.push(area[row][column + 1]);
    if (row < area.length - 1) nodes.push(area[row + 1][column]);
    
    return nodes.filter(neighbor => !neighbor.isVisited);
  }
