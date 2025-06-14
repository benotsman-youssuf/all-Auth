import express from "express";
import { authMiddleware } from "./auth.mw.js";

const app = express();
const PORT = 3030;

app.use(authMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App running @ http://localhost:${PORT}`);
});
