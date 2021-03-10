const express = require("express");
const router = express.Router();
const assessment_typeController = require("./assessment_type.controller");

/*
 * GET
 */
router.get("/", assessment_typeController.list);

/*
 * GET BY ID
 */
router.get("/:id", assessment_typeController.show);

/*
 * POST
 */
router.post("/", assessment_typeController.create);

/*
 * PUT
 */
router.put("/:id", assessment_typeController.update);

/*
 * DELETE
 */
router.delete("/:id", assessment_typeController.remove);

module.exports = router;
