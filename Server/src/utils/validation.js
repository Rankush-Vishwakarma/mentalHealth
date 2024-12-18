const { body, validationResult } = require('express-validator');

// User registration validation rules
const userRegistrationRules = () => {
  return [
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('name').not().isEmpty().withMessage('Name is required')
  ];
};

// Validate request
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  userRegistrationRules,
  validate
};