const express = require("express");
const router = express.Router();

const newsController = require("../controllers/newsController.js")

module.exports = ({upload}) => {
router.route("/").post(newsController.createNews);
router.route("/article/:post_id").post(newsController.uploadNewsText)
router.route("/image/:post_id").post(upload.single("image"),newsController.uploadNewsImage)
router.route("/").get(newsController.getAllNews);
router.route("/:post_id").get(newsController.getNewsById);
router.route("/publish/:post_id").patch(newsController.publishNewsById)
router.route("/:id").patch(newsController.updateNewsById);
router.route("/:id").delete(newsController.deleteNewsById);  

return router;
};


