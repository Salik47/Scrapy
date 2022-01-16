const NodeCache = require("node-cache");
const cache = new NodeCache({});

module.exports = cacheData = async (req, res, next) => {
  const key = req.originalUrl || req.url;
  const cachedData = cache.get(key);
  if (cachedData) {
    return res.send(cachedData);
  } else {
    res.originalSend = res.send;
    res.send = (body) => {
      res.originalSend(body);
      cache.set(key, body, 180);
    };
    next();
  }
};
