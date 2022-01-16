const { loadAllData } = require("../utils/loadData");

const generateNextMove = async (code, givenMoves) => {
  const data = await loadAllData();
  let result = data.filter((item) => item.code === code);
  if (result.length === 0) {
    return;
  }
  const allMoves = result[0].moves.split(" ");

  if (code === "A00") {
    for (let i = 0; i < allMoves.length; i++) {
      if (allMoves[i].length === 1) {
        continue;
      }
      allMoves[i] = allMoves[i].slice(0, -1);
    }
  }

  let i = 0,
    j = 0;

  while (i < allMoves.length && j < givenMoves.length) {
    if (allMoves[i].length === 1) {
      i++;
      continue;
    }
    if (allMoves[i] !== givenMoves[j]) {
      return;
    }
    i++;
    j++;
  }
  return allMoves[i];
};

module.exports = {
  generateNextMove,
};
