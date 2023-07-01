const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuid } = require("uuid");


router.route("/").get(newsController.getAllNews);
router.route("/:id").get(newsController.getNewsById);
router.route("/").post(newsController.createNews);
router.route("/:id").patch(newsController.updateNewsById);
router.route("/:id").delete(newsController.deleteNewsById);

module.exports = router;



