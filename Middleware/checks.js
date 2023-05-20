const { check , validationChain } = require("express-validator");

const checks = [
  check("band")
    .notEmpty()
    .isString()
    .exists()
    .withMessage({ msg: "The band field is required" }),
  check("album")
    .notEmpty()
    .isString()
    .exists()
    .withMessage({ msg: "The album field is required" }),
  check("genre").notEmpty().isString().exists(),
  check("price")
    .notEmpty()
    .exists()
    .withMessage({ msg: "The price field is required" }),
  check("img")
    .notEmpty()
    .isString()
    .exists()
    .withMessage({ msg: "The img field is requierd" }),
//   check("enStock")
//     .not()
//     .isEmpty()
//     .withMessage({ msg: "The enStock field is requierd" }),
];

module.exports = checks