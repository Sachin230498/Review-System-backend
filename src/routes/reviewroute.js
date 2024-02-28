// routes/reviewRoutes.js
const express = require("express");
const router = express.Router();
const {
  submitReview,
  getCompanyRatings,
} = require("../controllers/reviewrat");
const authMiddleware = require("../middleware/authmiddleware");

router.post("/review", authMiddleware, submitReview);
router.get("/company/:id/ratings", getCompanyRatings);


module.exports = router;
