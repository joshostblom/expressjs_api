import { createToken } from "../utility/JWT.js";

export default {
  login: async (req, res) => {
    const { user, password } = req.body;
    if (
      user == process.env.ADMIN_USER &&
      password == process.env.ADMIN_PASSWORD
    ) {
      const token = createToken(user);
      res.send({
        token: token,
        loginSuccessful: true,
      });
    } else {
      res.send({
        token: null,
        loginSuccessful: false,
      });
    }
  },
};
