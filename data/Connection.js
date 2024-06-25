import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_PORTFOLIO_USER,
    password: process.env.MYSQL_PORTFOLIO_PASSWORD,
    database: process.env.MYSQL_PORTFOLIO_DATABASE,
  })
  .promise();

export default pool;
