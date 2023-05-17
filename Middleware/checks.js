const { check } = require("express-validator");

const checks = [
  check("band")
    .not()
    .isEmpty()
    .isString()
    .withMessage({ msg: "The band field is required" }),
  check("album")
    .not()
    .isEmpty()
    .isString()
    .withMessage({ msg: "The album field is required" }),
  check("genre").not().isEmpty().isString(),
  check("price")
    .not()
    .isEmpty()
    .withMessage({ msg: "The price field is required" }),
  check("img")
    .not()
    .isEmpty()
    .isString()
    .withMessage({ msg: "The img field is requierd" }),
//   check("enStock")
//     .not()
//     .isEmpty()
//     .withMessage({ msg: "The enStock field is requierd" }),
];

module.exports = checks