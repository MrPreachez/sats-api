const express = require("express");
const router = express.Router();

const newsController = require("../controllers/newsController.js")

module.exports = ({upload}) => {
router.route("/").post(newsController.createNews);
router.route("/article").post(newsController.uploadNewsText)
router.route("/").get(newsController.getAllNews);
router.route("/:id").get(newsController.getNewsById);
router.route("/:id").patch(newsController.updateNewsById);
router.route("/:id").delete(newsController.deleteNewsById);  

return router;
};


