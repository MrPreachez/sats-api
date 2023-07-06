const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const multer = require("multer");

const PORT = process.env.PORT || 8081;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));



//FILE STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

const newsRoutes = require("./routes/news");
const memberRoutes = require("./routes/members");

app.get("/", (req, res, next) => {
  next();
});

app.use("/news", newsRoutes({ upload }));
app.use("/members", memberRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
