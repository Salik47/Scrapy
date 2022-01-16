const axios = require("axios");
const { loadAllData } = require("../utils/loadData");
const { generateNextMove } = require("../utils/moveGenerator");

const URL = process.env.SCRAPE_URL || "https://www.data.com/chessecohelp.html";

const getAllData = async (_req, res) => {
  try {
    const response = await axios.get(URL);
    const data = response.data;
    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "Error", message: "Internal Server Error" });
  }
};

const getDataByCode = async (req, res) => {
  try {
    const code = req.params.CODE;
    const data = await loadAllData();
    let result = data.filter((item) => item.code === code);
    return res.status(200).send(result[0].name + "\n" + result[0].moves);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "Error", message: "Internal Server Error" });
  }
};

const nextMove = async (req, res) => {
  const moves = req.url.split("/");
  const code = moves[1];
  const givenMoves = moves.slice(2);

  const nextMove = await generateNextMove(code, givenMoves);
  if (!nextMove) {
    return res.status(404).send("No next move found");
  }
  return res.status(200).send(nextMove);
};

module.exports = {
  getAllData,
  getDataByCode,
  nextMove,
};
