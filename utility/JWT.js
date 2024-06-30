import jwt from "jsonwebtoken";

export function createToken(user) {
  return jwt.sign({ user: user }, process.env.JWT_SECRET, {
    expiresIn: "10h",
  });
}

export function verifyToken(req, res, next) {
  const authHeader = req.headers["Authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
