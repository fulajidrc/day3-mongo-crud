// const express = require('express');
const { validationResult, ValidationChain } = require('express-validator');
// can be reused by many routes

// parallel processing
const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

module.exports = validate;