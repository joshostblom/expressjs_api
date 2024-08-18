export default {
  getResume: async (req, res) => {
    const filePath = process.cwd() + "/data/resources/resume.pdf";
    res.setHeader(
      "Content-Disposition",
      'inline; filename="Joshua_Ostblom_Resume.pdf"'
    );
    res.sendFile(filePath);
  },
};
