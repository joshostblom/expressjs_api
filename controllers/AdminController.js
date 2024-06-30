export default {
  login: async (req, res) => {
    const { user, password } = req.body;
    if (
      user == process.env.ADMIN_USER &&
      password == process.env.ADMIN_PASSWORD
    ) {
      res.send(true);
    } else {
      res.send(false);
    }
  },
};
