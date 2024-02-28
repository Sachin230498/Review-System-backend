// routes/companyRoutes.js
const express = require("express");
const router = express.Router();
const {
  createCompany,
  getCompanyList,
} = require("../controllers/companycon");
const authMiddleware = require("../middleware/authmiddleware");

router.post("/company", authMiddleware, createCompany);
router.get("/company", getCompanyList);

module.exports = router;
