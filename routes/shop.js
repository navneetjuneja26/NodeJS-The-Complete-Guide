const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("This is another middle ware");
  res.send({
    message: "Default home page"
  });
});

module.exports = router;
