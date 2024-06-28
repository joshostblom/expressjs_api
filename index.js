import express from "express";
import projectRoute from "./routes/ProjectRoutes.js";
import resourceRoute from "./routes/ResourceRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/project", projectRoute);
app.use("/resources", resourceRoute);

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send("Internal server error.");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
