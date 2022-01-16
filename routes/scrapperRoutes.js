const { Router } = require("express");
const router = Router();
const cache = require("../utils/routeCache");
const {
  getAllData,
  getDataByCode,
} = require("../controllers/scrapperController");

router.get("/", cache, getAllData);

router.get("/:CODE", cache, getDataByCode);

module.exports = router;
