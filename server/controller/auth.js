const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

//   Register user

exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

//   Create user
  const user = await User.create({
    name,
    email,
    password,
  });
  sendTokenResponse(user, 200, res);
});

//  Login user

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //  Validate email & password
  if (!email || !password) {
    return next(
      new ErrorResponse('Please provide and email and password', 400)
    );
  }

  //   Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }

  //   Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});