// controllers/reviewController.js
const Review = require("../models/reviews");

const submitReview = async (req, res) => {
  const { userId, companyId, rating, comment } = req.body;

  try {
    const review = new Review({ userId, companyId, rating, comment });
    await review.save();
    res.status(201).json({ message: "Review submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getCompanyRatings = async (req, res) => {
  const companyId = req.params.id;

  try {
    const reviews = await Review.find({ companyId });
    const totalRatings = reviews.reduce(
      (acc, review) => acc + review.rating,
      0
    );
    const averageRating = totalRatings / reviews.length;
    res.status(200).json({ averageRating });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  submitReview,
  getCompanyRatings,
};
