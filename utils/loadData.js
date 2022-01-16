const axios = require("axios");
const cheerio = require("cheerio");
const URL = process.env.SCRAPE_URL || "https://www.data.com/chessecohelp.html";

const loadAllData = async () => {
  const response = await axios.get(URL);
  const $ = cheerio.load(response.data);

  const data = [];
  $("tr", response.data).each(function () {
    const tds = $(this).find("td");
    const code = tds.first().text();
    const name = tds.find("b").text();
    const moves = tds.find("font").find('[size="-1"]').text();

    data.push({ code, name, moves });
  });

  return data;
};

module.exports = {
  loadAllData,
};
