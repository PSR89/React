const router = require("express").Router();
const User = require("../models/User");
//register

router.get("/register", async (req, res) => {
  const user = await new user({
    username: "John",
    email: "john@gmail.com",
    password: "12345",
  });
  await user.save();
  res.send("ok");
});
module.exports = router;
