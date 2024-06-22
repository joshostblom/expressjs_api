import express from "express";
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
} from "./database.js";

const app = express();

app.use(express.json());

app.get("/projects", async (req, res) => {
  const projects = await getProjects();
  res.send(projects);
});

app.get("/projects/:id", async (req, res) => {
  const project = await getProject(req.params.id);
  res.send(project);
});

app.post("/project", async (req, res) => {
  const { title, description, link, image } = req.body;
  const project = await createProject(title, description, link, image);
  res.status(201).send(project);
});

app.post("/project/:id", async (req, res) => {
  const { title, description, link, image } = req.body;
  const project = await updateProject(
    req.params.id,
    title,
    description,
    link,
    image
  );
  res.send(project);
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send("Internal server error.");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
