const express = require("express");
const router = express.Router();
const User = require("../models/User");
// https://express-validator.github.io/docs/index.html
const { check, validationResult } = require("express-validator");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Only valid email can be used.").isEmail(),
    check("password", "Enter a password of 8 or more characters").isLength({
      min: 8
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("passed");
  }
);

module.exports = router;
