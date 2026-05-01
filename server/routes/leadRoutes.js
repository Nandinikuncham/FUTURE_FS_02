const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
  addNote
} = require("../controllers/leadController");

// protect all routes
router.use(auth);

router.post("/", createLead);
router.get("/", getLeads);
router.put("/:id", updateLead);
router.delete("/:id", deleteLead);
router.post("/:id/notes", addNote);

module.exports = router;