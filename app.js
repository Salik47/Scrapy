const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const scraperRoutes = require("./routes/scraperRoutes");
const PORT = process.env.PORT;

const app = express();

// Middlewares
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV === "DEV") {
	const morgan = require("morgan");
	app.use(morgan("tiny"));
}

// Routes
app.use("/", scraperRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
