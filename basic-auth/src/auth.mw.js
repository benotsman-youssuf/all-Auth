import { decodeCredentials } from "./decode.js";

export const authMiddleware = async (req, res, next) => {
  const [username, password] = decodeCredentials(
    req.headers.authorization || ""
  );

  if (username === "admin" && password === "admin") {
    return next();
  }
  res.set("WWW-Authenticate", 'Basic realm="user_pages"');
  res.status(401).send("Authentication required");
};
