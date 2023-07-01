const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuid } = require("uuid");


router.route("/").get(membersController.getAllMembers);
router.route("/:id").get(membersController.getMemberById);
router.route("/").post(membersController.createMember);
router.route("/:id").patch(membersController.updateMemberById);
router.route("/:id").delete(membersController.deleteMemberById);

module.exports = router;
