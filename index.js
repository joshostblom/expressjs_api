import express from "express";
import projectRoute from "./routes/ProjectRoutes.js";
import resourceRoute from "./routes/ResourceRoutes.js";
import adminRoute from "./routes/AdminRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:4000",
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/project", projectRoute);
app.use("/resources", resourceRoute);
app.options("/admin", cors(corsOptions));
app.use("/admin", adminRoute);

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send("Internal server error.");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
