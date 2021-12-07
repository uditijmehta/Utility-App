const ErrorResponse = require('../utils/errorResponse');
const Expenses = require('../models/Expense');
const asyncHandler = require('../middleware/async');

// @desc    Get all expenses
// @route   GET /api/v1/expenses/user/:userId
// @access  Private

exports.getAllExpenses = asyncHandler(async (req, res, next) => {
  const expenses = await Expenses.find({
    user: req.user.id,
  }).populate('user', ['name']);

  if (!expenses) {
    return next(
      new ErrorResponse(`Expense not found with id ${req.user.id}`, 400)
    );
  }

  res.status(200).json({
    success: true,
    count: expenses.length,
    data: expenses,
  });
});