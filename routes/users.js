var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(203).send({
    name: "MAx",
    surname: "Maierhofer",
  });
});

module.exports = router;
