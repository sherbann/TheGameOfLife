
// Any live cell < 2  dies as if by under population.
// Any live cell >3 neighbors dies, as if by overcrowding.
// Any live 2=>cell =>3 live neighbors lives on to the next generation.
// Any dead cell = 3 live neighbors becomes a live cell.

const cell1 = { alive : true,neighbors : 1}
const cell2 = { alive : true, neighbors :2}
const cell3 = { alive : true, neighbors :3}
const cell4 = { alive : false, neighbors:3}
const cell5 = { alive: false, neighbors: 2 }

 function generation(cell){
   if (cell.alive === false && cell.neighbors === 3){
    return true;
   } else if (cell.alive === false && cell.neighbors === 2) {
     return false;
   }else if (cell.alive === true && cell.neighbors < 2){
    return false;
  }else if (cell.alive === true && cell.neighbors === 2) {
    return true;
   }else if (cell.alive === true && cell.neighbors === 3) {
     return true;
   } 
}

describe("Game of Life Simulator", () => {
  it("alive,  neighbors < 2, dies", ()  => {
     const result = generation(cell1);
     expect(result).toBe(false); 
  });
  it("alive,  neighbors = 2, lives", () => {
    const result = generation(cell2);
    expect(result).toBe(true);
  });
  it("alive,  neighbors = 3, lives", () => {
    const result = generation(cell3);
    expect(result).toBe(true);
  });
  it("dead,  neighbors = 3, lives", () => {
    const result = generation(cell4);
    expect(result).toBe(true);
  });
  it("dead,  neighbors = 2, dies", () => {
    const result = generation(cell5);
    expect(result).toBe(false);
  });
});