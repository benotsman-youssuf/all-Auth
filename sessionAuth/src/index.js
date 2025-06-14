import express from "express";
import sessions from "express-session";

import { HomeHandler } from "./handlers/home.js";
import { loginHnadler } from "./handlers/login.js";
import { processLoginHandler } from "./handlers/process-login.js";
import { LogoutHandler } from "./handlers/logout.js";

const app = express();
const PORT = 3030

app.use(
  sessions({
    secret: "some secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
    resave: true,
    saveUninitialized: false,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", HomeHandler);
app.get("/login", loginHnadler);
app.post("/process-login", processLoginHandler);
app.get('/logout', LogoutHandler);


app.listen(PORT, () => {
  console.log(`App running @ http://localhost:${PORT}`);
});
