export function dijkstra(area, beg, end) {
  const order = [];
  beg.distance = 0;
  const unvisited = getNodes(area);
  while (unvisited.length) {
    sortDist(unvisited);
    const close = unvisited.shift();
    if (close.distance === Infinity){ return order;}
    if (close.isWall) {continue;}
    order.push(close);
    close.isVisited = true;
    if (close === end) {return order;}
    updateUnvisited(close, area);
  }
}

function getUnvisited(val, area) {
  const nodes = [];
  const {column, row} = val;
  if (column > 0) {nodes.push(area[row][column - 1]);}
  if (row > 0) {nodes.push(area[row - 1][column]);}
  if (column < area[0].length - 1){ nodes.push(area[row][column + 1]);}
  if (row < area.length - 1) {nodes.push(area[row + 1][column]);}
  return nodes.filter(neighbor => !neighbor.isVisited);
}

function getNodes(area) {
  const values = [];
  for (const rows of area) {
    for (const value of rows) {
      values.push(value);
    }
  }
  return values;
}

function sortDist(unvisited) {
  unvisited.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisited(node, area) {
  const unvisited = getUnvisited(node, area);
  for (const nodes of unvisited) {
    nodes.previousNode = node;
    nodes.distance = node.distance + 1;
  }
}

export function getNodesShortestPath(endNode) {
  const shortNode = [];
  let curr = endNode;
  while (curr) {
    curr = curr.previousNode;
    shortNode.unshift(curr);
  }
  return shortNode;
}
