const express = require("express");
const router = express.Router();
const membersController = require("../controllers/membersController")


router.route("/").get(membersController.getAllMembers);
router.route("/:id").get(membersController.getSingleMember);
router.route("/").post(membersController.createNewMember);
router.route("/:id").patch(membersController.updateMemberById);
router.route("/:id").delete(membersController.deleteMemberById);

module.exports = router;
