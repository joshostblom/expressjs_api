const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

app.get("/resume", (req, res) => {
  res.status(200).send({
    tshirt: "blah",
    size: "large",
  });
});
