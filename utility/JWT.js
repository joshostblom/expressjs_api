import jwt from "jsonwebtoken";

export function createAccessToken(user) {
  return jwt.sign({ user }, process.env.TOKEN_SECRET, {
    expiresIn: "10h",
  });
}

export function createRefreshToken(user) {
  return jwt.sign({ user }, process.env.REFRESH_TOKEN_SECRET);
}

export function verifyAccessToken(req, res, next) {
  const authHeader = req.headers["authorization"];
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

export function verifyRefreshToken(req, res) {
  const refreshToken = req.cookies.jwt;
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    const accessToken = createAccessToken(user);
    res.json({ accessToken });
  });
}
