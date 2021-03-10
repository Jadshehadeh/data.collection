const express = require("express");
const router = express.Router();
const assessmentController = require("./assessment.controller.js");

/*
 * GET
 */
router.get("/", assessmentController.list);

/*
 * GET BY ID
 */
router.get("/:id", assessmentController.show);

/*
 * POST
 */
router.post("/", assessmentController.create);

/*
 * PUT
 */
router.put("/:id", assessmentController.update);

/*
 * DELETE
 */
router.delete("/:id", assessmentController.remove);

module.exports = router;
