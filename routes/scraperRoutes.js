const { Router } = require("express");
const router = Router();
const cache = require("../utils/routeCache");
const {
  getAllData,
  getDataByCode,
  nextMove,
} = require("../controllers/scraperController");

router.get("/", cache, getAllData);
router.get("/:CODE", cache, getDataByCode);
router.use(cache, nextMove);

module.exports = router;
