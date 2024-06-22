import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();

export async function getProjects() {
  const [rows] = await pool.query("SELECT * FROM projects");
  return rows;
}

export async function getProject(id) {
  const [rows] = await pool.query(
    `
    SELECT * FROM projects
    WHERE id = ?
    `,
    [id]
  );
  return rows[0];
}

export async function createProject(title, description, link, image) {
  const [result] = await pool.query(
    `
    INSERT INTO projects (title, description, link, image)
    VALUES (?, ?, ?, ?)
    `,
    [title, description, link, image]
  );
  return getProject(result.insertId);
}

export async function updateProject(id, title, description, link, image) {
  const [result] = await pool.query(
    `
    UPDATE projects
    SET title = ?, description = ?, link = ?, image = ?
    WHERE id = ?
    `,
    [title, description, link, image, id]
  );
  return getProject(id);
}
