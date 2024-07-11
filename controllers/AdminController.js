import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "../utility/JWT.js";

export default {
  login: async (req, res) => {
    const { user, password } = req.body;
    if (
      user == process.env.ADMIN_USER &&
      password == process.env.ADMIN_PASSWORD
    ) {
      const accessToken = createAccessToken(user);
      const refreshToken = createRefreshToken(user);
      res.cookie("jwt", refreshToken, { httpOnly: true, secure: true });
      res.send({
        user: user,
        accessToken: accessToken,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  },

  refresh: async (req, res) => {
    verifyRefreshToken(req, res);
  },
};
