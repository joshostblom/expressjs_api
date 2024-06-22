import {
  getProjects,
  getProject,
  createProject,
  updateProject,
} from "../data/ProjectData.js";

export default {
  getAll: async (req, res) => {
    const projects = await getProjects();
    res.send(projects);
  },
  getOne: async (req, res) => {
    const project = await getProject(req.params.id);
    res.send(project);
  },
  create: async (req, res) => {
    const { title, description, link, image } = req.body;
    const project = await createProject(title, description, link, image);
    res.status(201).send(project);
  },
  update: async (req, res) => {
    const { title, description, link, image } = req.body;
    const project = await updateProject(
      req.params.id,
      title,
      description,
      link,
      image
    );
    res.send(project);
  },
};
