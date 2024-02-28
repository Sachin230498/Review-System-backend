// controllers/companyController.js
const Company = require("../models/company");

const createCompany = async (req, res) => {
  const { name, description } = req.body;

  try {
    const company = new Company({ name, description });
    await company.save();
    res.status(201).json({ message: "Company created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getCompanyList = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createCompany,
  getCompanyList,
};
