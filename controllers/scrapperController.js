const axios = require("axios");
const { loadAllData } = require("../utils/loadData");

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
    console.log(result);
    return res.status(200).send(result[0].name + "\n" + result[0].moves);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "Error", message: "Internal Server Error" });
  }
};

module.exports = {
  getAllData,
  getDataByCode,
};
