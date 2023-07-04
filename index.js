const express = require('express');
const app = express();
const cors = require("cors")
require("dotenv").config();

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const newsRoutes = require("./routes/news");
const memberRoutes = require("./routes/members")

app.get('/', (req, res, next) => {
  next();
});

app.use("/news", newsRoutes);
app.use("/members", memberRoutes)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});