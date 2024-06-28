export default {
  getResume: async (req, res) => {
    res.sendFile(process.cwd() + "/data/resources/resume.pdf");
  },
};
