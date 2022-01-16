const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const scrapperRoutes = require("./routes/scrapperRoutes");
const PORT = process.env.PORT || 5050;

const app = express();

// Middlewares
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/", scrapperRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
