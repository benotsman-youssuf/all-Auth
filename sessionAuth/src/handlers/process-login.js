import fs from "fs";
export const processLoginHandler = (req, res) => {
  if (req.body.username !== "admin" || req.body.password !== "admin") {
    return res.send("Invalid username or password");
  }

  req.session.userid = req.body.username;

  res.redirect("/");
};
