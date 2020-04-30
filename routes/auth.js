const express = require("express");
const { getUserJwt, findUser } = require("../models/user");

const router = express.Router();

router.post("/", (req, res) => {
  const { username } = req.body;
  const user = findUser({ username });

  if (!user) return res.status(400).send("User not found");

  return getUserJwt(user);
});

module.exports = router;
