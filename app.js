const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const scraperRoutes = require("./routes/scraperRoutes");
const PORT = process.env.PORT;

const app = express();

// Middlewares
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/", scraperRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
